;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-mao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M770.688 424.928 388 424.928l0 367.744c0 83.84 42.112 136.32 132.96 136.32L520.96 928.96l379.616 0L900.576 555.104C900.608 473.568 863.552 424.928 770.688 424.928zM825.504 590.048l0 50.24-145.312 0 0-140.448 53.216 0C801.472 499.872 825.504 500.096 825.504 590.048zM608.384 499.872l0 140.448-145.568 0c-0.064-68.704-0.16-139.552-0.288-140.448L608.384 499.872zM462.912 768.544c0 0 0-23.392-0.032-56.48l145.504 0 0 145.376-43.808 0C496 857.44 462.912 849.632 462.912 768.544zM825.504 857.44l-145.312 0 0-145.376 145.312 0 0 143.84C825.504 856.448 825.536 856.928 825.504 857.44L825.504 857.44z"  ></path>'+
      ''+
      '<path d="M122.624 130.496l0 78.24C198.304 210.56 246.016 246.048 257.184 309.664L258.752 318.08l-136.128 81.216 0 81.216c0 0 99.456-61.152 137.216-81.344l0 130.72 0.064 14.656L259.84 531.04l-137.216 81.92 0 81.216c0 0 99.968-61.44 137.504-81.568l0 5.824 0 42.208c0 179.296-137.504 190.112-137.504 190.112l0 79.744c57.088-1.632 215.168-26.528 215.168-277.632L337.792 330.752C331.36 201.984 255.968 132.768 122.624 130.496z"  ></path>'+
      ''+
      '<path d="M821.344 217.632 821.344 130.496 745.952 130.496 745.952 217.632 543.552 217.632 543.552 130.496 468.256 130.496 468.256 217.632 388 217.632 388 295.488 468.256 295.488 468.256 367.552 543.552 367.552 543.552 295.488 745.952 295.488 745.952 367.552 821.344 367.552 821.344 295.488 901.376 295.488 901.376 217.632Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiav4" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M528.36352 137.39008c-194.62144 0-359.08608 164.46464-359.08608 359.08608 0 194.67264 164.46464 359.08608 359.08608 359.08608 194.72384 0 359.08608-164.41344 359.08608-359.08608C887.45984 301.84448 723.0976 137.39008 528.36352 137.39008L528.36352 137.39008zM330.8032 322.57024l115.1488-1.31072 30.78144 0 105.02144 238.40768 79.50336-238.40768 80.7936 0L572.86656 698.05056l0 0-86.30272 1.81248L342.91712 348.52864M572.86656 698.05056"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
