<script type="text/javascript">
window.onload = function(){
   var link = "https://f6c005c0.ngrok.io/rule_configurations"
var iframe = document.createElement('iframe');
iframe.frameBorder=0;
iframe.setAttribute("src", link);
var iframeDev1 = document.createElement('div');
var iframeDev2 = document.createElement('div');
var iframeDev3 = document.createElement('div');
var iframeDev4 = document.createElement('div');
iframeDev4.setAttribute('id', 'sam');
iframeDev4.style.cssText="bottom: 20px;width: 147px;right: 20px;border-radius: 30px; border: 0; outline: 0; position: fixed; height: 60px; z-index: 0; overflow: hidden; box-shadow: 0 0 25px 0 rgba(0,0,0,.05);";
iframeDev2.style.cssText="position: fixed; width: 0px;height: 0px; bottom: 0px;right: 0px;z-index: 2147483647;"
iframeDev1.appendChild(iframeDev2);
iframeDev2.appendChild(iframeDev3);
iframeDev3.appendChild(iframeDev4);
iframeDev4.appendChild(iframe);
document.body.appendChild(iframeDev1); 
}
</script>