// import nock.js
$(document).ready( function() {

var nockjs = document.createElement("script");

  nockjs.type = "text/javascript";
  nockjs.src = "nock.js";

  document.body.appendChild(nockjs);
})

  
// Algorithm:
// first is either 0-9 or [
// if 0-9, the subject is just an atom
//   so take until the first space
// else if [, the subject is a cell
//   count braces until even, at that point the subject has ended
function getSliceIndex( raw_in )
{
  if(!("0123456789[".includes(raw_in[0])))
  {
    return -1;
  }

  // slice out subject atom
  if(!(raw_in.charAt(0) == "["))
  {
    return raw_in.indexOf(" ");
  }

  // slice out subject cell
  bcount = 1;
  slice_index = 1;
  while( bcount > 0 && slice_index < raw_in.length )
  {
    if( raw_in.charAt(slice_index) == "[" )
    {
      bcount++;
    }
    else if( raw_in.charAt(slice_index) == "]" )
    {
      bcount--;
    }

    slice_index++;
  }

  if( bcount != 0 )
  {
    return -1;
  }

  return slice_index;
}


// attempt evaluate
function nock_fiddle() {
  // set to true to interpret/print as JSON with comma delimiters for each element
  asJson = false;

  document.getElementById("nock_error").textContent = "";
  raw_in = document.getElementById("nock_input").value;

  if( asJson ) {
    // read input as JSON
    // attempt to run nock.nock
    try {
      frmt_in = JSON.parse(raw_in);
      frmt_out = nock.nock.apply(this, frmt_in);

      raw_out = JSON.stringify(frmt_out);
      document.getElementById("nock_output").textContent = raw_out;
    }
    catch(err) {
      // warn user, log actual err string
      document.getElementById("nock_error").textContent = "nock.js cannot interpret input";
      console.log(err);
    }

    return;
  }


  // read input as raw string. must split subject and formula
  slice_index = getSliceIndex(raw_in);
  if( slice_index == -1 )
  {
    document.getElementById("nock_error").textContent = "can't determine subject from formula";
    return;
  }

  subject = raw_in.slice(0, slice_index);
  formula = raw_in.slice(slice_index+1, raw_in.length);

  // attempt to run nock.nock
  try {
    frmt_out = nock.nock(subject, formula);

    raw_out = JSON.stringify(frmt_out).replace(/,/g, " ");
    document.getElementById("nock_output").textContent = raw_out;
  }
  catch(err) {
    // warn user, log actual err string
    document.getElementById("nock_error").textContent = "nock.js cannot interpret input";
    console.log(err);
  }
}

