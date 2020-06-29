function toCountString(sec) {
      if (sec <= 0) {
          return '00:00:00';
      }

      var day = Math.floor(sec / (60*60*24));
      var hour = Math.floor(sec % (60*60*24)/(60*60)).toString().replace(/^(\d)$/, '0$1');
      var min = Math.floor(sec % (60*60*24) / (60) % 60).toString().replace(/^(\d)$/, '0$1');
      var sec = Math.floor(sec % (60*60*24)%60%60).toString().replace(/^(\d)$/, '0$1');
      return day + 'days ' + hour + ':' + min + ':' + sec;
      //return day + 'd ' + hour + 'h ' + min + 'm ' + sec + 's';
  }

  function updateCountdown(id, m, c) { 
      var node = document.getElementById(id);
      if (!node) {
          return false;
      }
      for (var i = 0; i < node.childNodes.length; i++) {
          node.removeChild(node.childNodes[i]);
      }
      var count = toCountString(Math.floor((m - c)/1000));
      node.appendChild(document.createTextNode(count));
  }