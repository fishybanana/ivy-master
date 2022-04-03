// ==UserScript==
// @name         IVY Monthly Eval Autotable Creator Script
// @namespace    http://tampermonkey.net
// @version      0.3
// @downloadURL  https://github.com/fishybanana/ivy-master/raw/main/ivy-monthly-eval-table.user.js
// @description  "To any action there is always an opposite and equal reaction" - Newton . Basically this script will add the table for the text box area for pretty formatting.
// @author       fishybanana
// @match        *://ivy001.cafe24.com/firmsugang_input_month.htm*
// @match        *://onlineciec.com/firmsugang_input_month.htm*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @run-at       document-end
// @icon         data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z'/%3E%3C/svg%3E
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

//CODE INJECTION - START- THIS ADDS TABLE TO THE CURRENT TEXT BOX
ed._doc.body.innerHTML = '<table style="border-collapse:collapse;border-spacing:0; table-layout: fixed; width: 100%"><colgroup><col style="width: 100%"></colgroup><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Calibri, sans-serif; font-size: 14px; font weight:normal;overflow:hidden;padding:10px 5px;word-break:normal; border-color:inherit;text-align:justify;vertical-align:top"><span style="font-weight:bold;color:#000"><font size="3">Strengths:<br></font></span>&nbsp;<span style="white-space:pre"></span><span style="font-weight: normal;"> </span></th></tr><tr><td style="border-color:black;border-style:solid;border-width:1px;font-family:Calibri, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal; border-color:inherit;text-align:justify;vertical-align:top"><span style="font-weight:bold;color:#000"><font size="3">Weakness:<br></font></span>&nbsp;<span style="white-space:pre"></span></td></tr><tr> <td style="border-color:black;border-style:solid;border-width:1px;font-family:Calibri, sans-serif;font-size:14px; overflow:hidden;padding:10px 5px;word-break:normal;border-color:inherit;text-align:justify;vertical-align:top"><span style="font-weight:bold;color:#000"><font size="3">Recommendations:<br></font></span>&nbsp;<span style="white-space:pre"></span></td><!--arin is an angel---></tr></table>'
//CODE INJECTION - ENDS


})();
