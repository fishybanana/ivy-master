// ==UserScript==
// @name         IVY Autotable Creator Script
// @namespace    http://tampermonkey.net
// @version      0.1
// @description  "To any action there is always an opposite and equal reaction" - Newton . Basically this script will add the table for the text box area for pretty formatting.
// @author       Bae Yubin
// @match        *://ivy001.cafe24.com/firmsugang_input_month.htm*
// @match        *://onlineciec.com/firmsugang_input_month.htm*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

//CODE INJECTION - START-
ed._doc.body.innerHTML = '<table style="border-collapse:collapse;border-spacing:0; table-layout: fixed; width: 100%"><colgroup><col style="width: 100%"></colgroup><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Calibri, sans-serif; font-size: 14px; font weight:normal;overflow:hidden;padding:10px 5px;word-break:normal; border-color:inherit;text-align:justify;vertical-align:top"><span style="font-weight:bold;color:#000"><font size="3">Strengths:<br></font></span>&nbsp;<span style="white-space:pre"></span><span style="font-weight: normal;"> </span></th></tr><tr><td style="border-color:black;border-style:solid;border-width:1px;font-family:Calibri, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal; border-color:inherit;text-align:justify;vertical-align:top"><span style="font-weight:bold;color:#000"><font size="3">Weakness:<br></font></span>&nbsp;<span style="white-space:pre"></span></td></tr><tr> <td style="border-color:black;border-style:solid;border-width:1px;font-family:Calibri, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;border-color:inherit;text-align:justify;vertical-align:top"><span style="font-weight:bold;color:#000"><font size="3">Recommendations:<br></font></span>&nbsp;<span style="white-space:pre"></span></td><!--arin is an angel---></tr></table>'
//CODE INJECTION - ENDS


})();