document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('text-input');
    var wordCountSpan = document.getElementById('count');
  
    textarea.addEventListener('input', function() {
      var text = this.value;
      var wordCount = countWords(text);
      wordCountSpan.textContent = wordCount;
    });
  
    function countWords(text) {
      var words = text.trim().split(/\s+/);
      return words.length;
    }
  });
  