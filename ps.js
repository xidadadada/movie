
function password() {
       var headtitle = '请输入密码:(如果不知,请添加微信号 '+ weixin +')';
      var testV = 0; var pass1 = prompt(headtitle,'');
      while (testV < 3) {
        if (!pass1) history.go(-1);
        if (pass1 == daypss) {
          //初始密码123
          alert('一看你就是自己人，口令正确!');
          //window.location.href="http://jia.telidh.cn/tree.html";
          //修改需要密码认证的网页
           break;
         }
         testV+=1;
          var pass1 = prompt('朋友，密码不对！:(','');
        }
        if (pass1!="password" & testV ==3) window.location.href="../movie/index.html";
 
        return " ";
      }
       document.write(password());
