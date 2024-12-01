"use strict";

// Remove unwanted elements
document.querySelector("#header > div.pr.bh.lcs.z1.fon.hdf").remove();
document
  .querySelector(
    "body > div.cc.fon > div > div.pf.py.pb0.pl0.pr0 > div.ccn.bh.hax.lp-5.lpl-10.lpr-10.lp-m_l-15.lp-m_r-15"
  )
  .remove();
document
  .querySelector(
    "body > div.cc.fon > div > div.x.lpl-10.lpr-10.lpt-10.lpb-25.lmax.lp-m_l-20.lp-m_r-20 > div.hfr-m.ltab.lp-m_l-15 > div.hfr-s.lt2s.lmt-10"
  )
  .remove();

// Focus on the page
document.querySelector("body > div.cc.fon").focus();

// Automatically click on pronunciation
//document.querySelector(".i-volume-up").click();
