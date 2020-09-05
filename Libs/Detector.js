<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "eOjR571ByEK8Dn_pX387OZ8HkLU:1356944826908";
 
 
 var CS_env = {"domainName":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","relativeBaseUrl":"","projectName":"webgl-globe","assetVersionPath":"http://www.gstatic.com/codesite/ph/16229512607128645344","projectHomeUrl":"/p/webgl-globe","profileUrl":"/u/103961560919112817044/","token":"eOjR571ByEK8Dn_pX387OZ8HkLU:1356944826908","loggedInUserEmail":"emouaddib@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-23152241-3'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>Detector.js - 
 webgl-globe -
 
 
 Geographic Data Visualization Platform meant for the web. - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>emouaddib@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/103961560919112817044/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/103961560919112817044/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fwebgl-globe%2Fsource%2Fbrowse%2Fglobe%2FThree%2FDetector.js%3Fr%3D167cd00544424b26d90f76d56ea22d53aa02bb1a" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/webgl-globe">
 <a href="/p/webgl-globe/">
 
 
 <img src="/p/webgl-globe/logo?cct=1351294237"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/webgl-globe/"><span itemprop="name">webgl-globe</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/webgl-globe/"><span itemprop="description">Geographic Data Visualization Platform meant for the web.</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/webgl-globe/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/webgl-globe/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 
 
 <a href="/p/webgl-globe/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/webgl-globe/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 <form action="/p/webgl-globe/source/browse" style="display: inline">
 
 Repository:
 <select name="repo" id="repo" style="font-size: 92%" onchange="submit()">
 <option value="default">default</option><option value="wiki">wiki</option>
 </select>
 </form>
 
 


 <span class="inst1"><a href="/p/webgl-globe/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/webgl-globe/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/webgl-globe/source/list">Changes</a></span> &nbsp;
 <span class="inst4"><a href="/p/webgl-globe/source/clones">Clones</a></span> &nbsp; 
 &nbsp;
 
 
 <form action="/p/webgl-globe/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/webgl-globe/source/browse/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">hg</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/webgl-globe/source/browse/globe/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">globe</a><span class="sp">/&nbsp;</span><a href="/p/webgl-globe/source/browse/globe/Three/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">Three</a><span class="sp">/&nbsp;</span>Detector.js</span>
 
 

 <span class="sourcelabel">Download <a href="//webgl-globe.googlecode.com/archive/167cd00544424b26d90f76d56ea22d53aa02bb1a.zip">zip</a></span>


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>167cd0054442</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_60"

><td id="60"><a href="#60">60</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_1

><td class="source">/**<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_2

><td class="source"> * @author alteredq / http://alteredqualia.com/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_3

><td class="source"> * @author mr.doob / http://mrdoob.com/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_4

><td class="source"> */<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_5

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_6

><td class="source">Detector = {<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_7

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_8

><td class="source">  canvas : !! window.CanvasRenderingContext2D,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_9

><td class="source">  webgl : ( function () { try { return !! window.WebGLRenderingContext &amp;&amp; !! document.createElement( &#39;canvas&#39; ).getContext( &#39;experimental-webgl&#39; ); } catch( e ) { return false; } } )(),<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_10

><td class="source">  workers : !! window.Worker,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_11

><td class="source">  fileapi : window.File &amp;&amp; window.FileReader &amp;&amp; window.FileList &amp;&amp; window.Blob,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_12

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_13

><td class="source">  getWebGLErrorMessage : function () {<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_14

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_15

><td class="source">    var domElement = document.createElement( &#39;div&#39; );<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_16

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_17

><td class="source">    domElement.style.fontFamily = &#39;monospace&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_18

><td class="source">    domElement.style.fontSize = &#39;13px&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_19

><td class="source">    domElement.style.textAlign = &#39;center&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_20

><td class="source">    domElement.style.background = &#39;#eee&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_21

><td class="source">    domElement.style.color = &#39;#000&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_22

><td class="source">    domElement.style.padding = &#39;1em&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_23

><td class="source">    domElement.style.width = &#39;475px&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_24

><td class="source">    domElement.style.margin = &#39;5em auto 0&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_25

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_26

><td class="source">    if ( ! this.webgl ) {<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_27

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_28

><td class="source">      domElement.innerHTML = window.WebGLRenderingContext ? [<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_29

><td class="source">        &#39;Sorry, your graphics card doesn\&#39;t support &lt;a href=&quot;http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation&quot;&gt;WebGL&lt;/a&gt;&#39;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_30

><td class="source">      ].join( &#39;\n&#39; ) : [<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_31

><td class="source">        &#39;Sorry, your browser doesn\&#39;t support &lt;a href=&quot;http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation&quot;&gt;WebGL&lt;/a&gt;&lt;br/&gt;&#39;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_32

><td class="source">        &#39;Please try with&#39;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_33

><td class="source">        &#39;&lt;a href=&quot;http://www.google.com/chrome&quot;&gt;Chrome&lt;/a&gt;, &#39;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_34

><td class="source">        &#39;&lt;a href=&quot;http://www.mozilla.com/en-US/firefox/new/&quot;&gt;Firefox 4&lt;/a&gt; or&#39;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_35

><td class="source">        &#39;&lt;a href=&quot;http://nightly.webkit.org/&quot;&gt;Webkit Nightly (Mac)&lt;/a&gt;&#39;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_36

><td class="source">      ].join( &#39;\n&#39; );<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_37

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_38

><td class="source">    }<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_39

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_40

><td class="source">    return domElement;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_41

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_42

><td class="source">  },<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_43

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_44

><td class="source">  addGetWebGLMessage : function ( parameters ) {<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_45

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_46

><td class="source">    var parent, id, domElement;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_47

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_48

><td class="source">    parameters = parameters || {};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_49

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_50

><td class="source">    parent = parameters.parent !== undefined ? parameters.parent : document.body;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_51

><td class="source">    id = parameters.id !== undefined ? parameters.id : &#39;oldie&#39;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_52

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_53

><td class="source">    domElement = Detector.getWebGLErrorMessage();<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_54

><td class="source">    domElement.id = id;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_55

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_56

><td class="source">    parent.appendChild( domElement );<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_57

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_58

><td class="source">  }<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_59

><td class="source"><br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_60

><td class="source">};<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/webgl-globe/source/detail?spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;r=167cd00544424b26d90f76d56ea22d53aa02bb1a">167cd0054442</a>
 by Doug Fritz &lt;dougfr...@google.com&gt;
 on May 5, 2011
 &nbsp; <a href="/p/webgl-globe/source/diff?spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a&r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;format=side&amp;path=/globe/Three/Detector.js&amp;old_path=/globe/Three/Detector.js&amp;old=">Diff</a>
 </div>
 <pre>data arts</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/webgl-globe/source/detail?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a';
 var publish_url = '/p/webgl-globe/source/detail?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/.hgignore');
 changed_urls.push('/p/webgl-globe/source/browse/.hgignore?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/LICENSE');
 changed_urls.push('/p/webgl-globe/source/browse/LICENSE?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/README.md');
 changed_urls.push('/p/webgl-globe/source/browse/README.md?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe-search/embed.html');
 changed_urls.push('/p/webgl-globe/source/browse/globe-search/embed.html?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe-search/index.html');
 changed_urls.push('/p/webgl-globe/source/browse/globe-search/index.html?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe-search/search.json');
 changed_urls.push('/p/webgl-globe/source/browse/globe-search/search.json?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/Detector.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/Detector.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 var selected_path = '/globe/Three/Detector.js';
 
 
 changed_paths.push('/globe/Three/RequestAnimationFrame.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/RequestAnimationFrame.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/ThreeExtras.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/ThreeExtras.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/ThreeWebGL.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/ThreeWebGL.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Tween.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Tween.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/ce.png');
 changed_urls.push('/p/webgl-globe/source/browse/globe/ce.png?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/globe.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/globe.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/index.html');
 changed_urls.push('/p/webgl-globe/source/browse/globe/index.html?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/loading.gif');
 changed_urls.push('/p/webgl-globe/source/browse/globe/loading.gif?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/population909500.json');
 changed_urls.push('/p/webgl-globe/source/browse/globe/population909500.json?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/world.jpg');
 changed_urls.push('/p/webgl-globe/source/browse/globe/world.jpg?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/webgl-globe/source/browse/.hgignore?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/.hgignore</option>
 
 <option value="/p/webgl-globe/source/browse/LICENSE?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/LICENSE</option>
 
 <option value="/p/webgl-globe/source/browse/README.md?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/README.md</option>
 
 <option value="/p/webgl-globe/source/browse/globe-search/embed.html?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe-search/embed.html</option>
 
 <option value="/p/webgl-globe/source/browse/globe-search/index.html?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe-search/index.html</option>
 
 <option value="/p/webgl-globe/source/browse/globe-search/search.json?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe-search/search.json</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/Detector.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 selected="selected"
 >/globe/Three/Detector.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/RequestAnimationFrame.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >...e/Three/RequestAnimationFrame.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/ThreeExtras.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/Three/ThreeExtras.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/ThreeWebGL.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/Three/ThreeWebGL.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Tween.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/Tween.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/ce.png?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/ce.png</option>
 
 <option value="/p/webgl-globe/source/browse/globe/globe.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/globe.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/index.html?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/index.html</option>
 
 <option value="/p/webgl-globe/source/browse/globe/loading.gif?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/loading.gif</option>
 
 <option value="/p/webgl-globe/source/browse/globe/population909500.json?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/population909500.json</option>
 
 <option value="/p/webgl-globe/source/browse/globe/world.jpg?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/world.jpg</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/webgl-globe/source/list?path=/globe/Three/Detector.js&r=167cd00544424b26d90f76d56ea22d53aa02bb1a">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 1952 bytes,
 60 lines</div>
 
 <div><a href="//webgl-globe.googlecode.com/hg-history/167cd00544424b26d90f76d56ea22d53aa02bb1a/globe/Three/Detector.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn167cd00544424b26d90f76d56ea22d53aa02bb1a': '/globe/Three/Detector.js'}
 codereviews = CR_controller.setup(
 {"domainName":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","relativeBaseUrl":"","projectName":"webgl-globe","assetVersionPath":"http://www.gstatic.com/codesite/ph/16229512607128645344","projectHomeUrl":"/p/webgl-globe","profileUrl":"/u/103961560919112817044/","token":"eOjR571ByEK8Dn_pX387OZ8HkLU:1356944826908","loggedInUserEmail":"emouaddib@gmail.com"}, '', 'svn167cd00544424b26d90f76d56ea22d53aa02bb1a', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

