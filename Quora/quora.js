document.querySelectorAll("a[href]").forEach(function(it, i) {
    it.onclick = function() {
        this.href = this.href + '?share=1'
    }
});
