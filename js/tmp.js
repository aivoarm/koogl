$(init2);

function init2() {


  /*******************************************************************************************
  *                                                                                           *
  *                                                                                            *
  *             TITLE                                                                       *
  *                                                                                              *
  *                                                                                               *
   *************************************************************************************************/

    var title='<title>Online learning, kids build websites </title>';




    /*******************************************************************************************
     *                                                                                           *
     *                                                                                            *
     *              BODY                                                           *
     *                                                                                              *
     *                                                                                               *
     *************************************************************************************************/

    var content = '<div id="content"></div>';

    var header= '<header class="wideBox"><h1>Kids learn HTML online</h1></header>';

    var man = '\
        <div class="cardPile" ></div>\
        <div id="myeditor">\
        <div id="ckedit">\
        <form id="CKform">\
        <textarea  class="ckeditor ui-droppable" id="editor" name="editor" cols="100" rows="10"></textarea>\
        </form>	\
        </div>	\
        <button class="menu resutlout" onclick="submitCode()" >Result</button>\
        </div>\
        <div id="outaround"> </div>\
        <div id="out"> </div>\
            <div class="menuboard">\
                <button class="menu"   onclick="prechallenge()">Previous</button>\
                <button class="menu"   onclick="nextchallenge()">Next</button>\
           </div>\
           <br/><br/><br/>\
            <div id="tutorials">\
                <h3 style="color:green">Tutorials</h3>\
                <a href="http://www.ysbl.york.ac.uk/~mgwt/KKwebcourse/">Learning to write a web page</a>\
               <br/>\
               <a href="http://www.lissaexplains.com/">lissaexplains</a>\
               <br/>\
             <a href="http://www.w3schools.com/html/">www.w3schools.com</a>\
             <br/>\
        </div>\
             <br/>\
           <div id="linkme" >\
              <p> to link me to your page copy me and paste in your HTML</p>\
             <textarea  style="width:350px; height:20px; font: normal normal normal 12px Arial,Helvetica,Tahoma,Verdana,Sans-Serif;">&lt;a href="http://koogl.com"&'+'gt;koogl.com&lt;/a&gt; </textarea  >\
           </div>\
        ';

    var googlsrch = '\
        <script>\
          (function() {\
            var cx = "010758940488641653985:WMX-1082278946";\
            var gcse = document.createElement("script"); gcse.type = "text/javascript"; gcse.async = true;\
            gcse.src = (document.location.protocol == "https:" ? "https:" : "http:") +\
                "//www.google.com/cse/cse.js?cx=" + cx;\
            var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(gcse, s);\
          })();\
        </script>\
        <gcse:search></gcse:search>\
        ';

    var msg ='\
        <div id="successMessage"><h2>You did great!</h2>   \
        <br/>    <h4>Now, click to see the output in Firefox below </h4> \
        <br/>    <button class="menu" '+'onclick="gotoLab()" >Result</button></div>\
        <div id="warning">    <br/>    <h4>You are close, but not enough :(</h4></div>\
        ';

    var banner = '\
        <div id="banner">\
            	    <a href="http://www.amazon.com/gp/product/0201484048/ref=as_li_tf_il?ie=UTF8&camp=1789&creative=9325&creativeASIN=0201484048&linkCode=as2&tag=kooglcom-\
                    20"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0201484048&Format=_SL110_&ID=AsinImage&MarketPlace=US&'+'ServiceVersion=20070822&WS=1&tag=kooglcom-20" ></a><img \
                    src="http://ir-na.amazon-adsystem.com/e/ir?t=kooglcom-20&l=as2&o=1&a=0201484048" width="1" height="1" '+'border="0" alt="" style="border:none !important; margin:0px !important;" />\
            	    <br/>\
            	    <iframe src="http://rcm-na.amazon-adsystem.com/e/cm?t=kooglcom-20&o=1&p=21&l=ur1&category=toysandgames&banner=0QERA3S6YE7N02MRZX02&f=ifr" width="125" height="125" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>\
            	    <br/>\
            	    <iframe src="http://rcm-na.amazon-adsystem.com/e/cm?t=kooglcom-20&o=1&p=14&l=ur1&category=toysandgames&banner=11KM0JD1ZXN1V6FZG082&f=ifr" width="160" '+'height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>\
            	    <br/>\
            	    <form  action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\
            	        <label style="color: greenyellow">Please, help me</label>\
            	        <label style="color: greenyellow">make better</label>\
                       <input type="hidden" name="cmd" value="_donations">\
            	        <input type="hidden" name="business" value="arman@ayvazyan.com">\
            	        <input type="hidden" name="lc" value="US">\
            	        <input type="hidden" name="no_note" value="0">\
            	        <input type="hidden" name="currency_code" value="CAD">\
            	        <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest">\
            	        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way'+ 'to pay online!">\
            	        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
            	    </form>\
            	</div>\
            	';

    var footer = '\
        <footer class="wideBox">\
         <style> #links a:link,a:visited{text-decoration: underline; color: blue;margin-left: 10px;}\
         #links a:hover{color: #000088;}</style>\
         <div id="links" >\
            <a href="http://stayathomemoms.about.com/od/activitiesandfun/a/how-to-create-a-website.htm">About.com  </a>\
            <a href="https://plus.google.com/101688463845078568963/?rel=author"\
                rel="publisher">Find us on Google+</a>\
        </div>\
         <p> &copy;2013. All rights reserved by Arman Aiva, email: aayvazy@gmail.com </p>\
        </footer>\
        ';


    /*******************************************************************************************
     *                                                                                           *
     *                                                                                            *
     *                JQUERY                                                                       *
     *                                                                                              *
     *                                                                                               *
     *************************************************************************************************/

    $(title).appendTo($("head"));

    $(content).appendTo($("body"));

    $(header).insertBefore($("#content"));

    $(man).appendTo($("#content"));

    $(googlsrch ).insertAfter($("#linkme"));

    $(msg ).appendTo($("#content"));

    $(banner).insertAfter($("#content"));

    $(footer).insertAfter($("#banner"));

}
