if (Function.prototype.bind && window.console && typeof console.log == "object"){
  [
    "log","info","warn","error","assert","dir","clear","profile","profileEnd"
  ].forEach(function (method) {
    console[method] = this.bind(console[method], console);
  }, Function.prototype.call);
}
