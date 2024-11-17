import React, { useRef, useLayoutEffect, useCallback } from 'react';
import { gsap, Expo, Power4 } from 'gsap';

function getScale(diffX, diffY) {
  if (diffX && diffY) {
    var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    return Math.min(distance / 735, 0.35);
  }

  return;
}

function getAngle(diffX, diffY) {
  if (diffX && diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
  }

  return;
}

var EMPTY = {};

function useInstance(value) {
  if (value === void 0) {
    value = {};
  }

  var ref = useRef(EMPTY);

  if (ref.current === EMPTY) {
    ref.current = typeof value === 'function' ? value() : value;
  }

  return ref.current;
}

function useTicker(callback, paused) {
  useLayoutEffect(function () {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }

    return function () {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

var Cursor = function Cursor(_ref) {
  var _ref$isGelly = _ref.isGelly,
      isGelly = _ref$isGelly === void 0 ? false : _ref$isGelly,
      _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === void 0 ? 1.25 : _ref$animationDuratio,
      _ref$animationEase = _ref.animationEase,
      animationEase = _ref$animationEase === void 0 ? Expo.easeOut : _ref$animationEase,
      _ref$gellyAnimationAm = _ref.gellyAnimationAmount,
      gellyAnimationAmount = _ref$gellyAnimationAm === void 0 ? 50 : _ref$gellyAnimationAm,
      _ref$stickAnimationAm = _ref.stickAnimationAmount,
      stickAnimationAmount = _ref$stickAnimationAm === void 0 ? 0.09 : _ref$stickAnimationAm,
      _ref$stickAnimationDu = _ref.stickAnimationDuration,
      stickAnimationDuration = _ref$stickAnimationDu === void 0 ? 0.7 : _ref$stickAnimationDu,
      _ref$stickAnimationEa = _ref.stickAnimationEase,
      stickAnimationEase = _ref$stickAnimationEa === void 0 ? Power4.easeOut : _ref$stickAnimationEa,
      _ref$magneticAnimatio = _ref.magneticAnimationAmount,
      magneticAnimationAmount = _ref$magneticAnimatio === void 0 ? 0.2 : _ref$magneticAnimatio,
      _ref$magneticAnimatio2 = _ref.magneticAnimationDuration,
      magneticAnimationDuration = _ref$magneticAnimatio2 === void 0 ? 0.7 : _ref$magneticAnimatio2,
      _ref$magneticAnimatio3 = _ref.magneticAnimationEase,
      magneticAnimationEase = _ref$magneticAnimatio3 === void 0 ? Power4.easeOut : _ref$magneticAnimatio3,
      _ref$colorAnimationEa = _ref.colorAnimationEase,
      colorAnimationEase = _ref$colorAnimationEa === void 0 ? Power4.easeOut : _ref$colorAnimationEa,
      _ref$colorAnimationDu = _ref.colorAnimationDuration,
      colorAnimationDuration = _ref$colorAnimationDu === void 0 ? 0.2 : _ref$colorAnimationDu,
      _ref$backgroundImageA = _ref.backgroundImageAnimationEase,
      backgroundImageAnimationEase = _ref$backgroundImageA === void 0 ? undefined : _ref$backgroundImageA,
      _ref$backgroundImageA2 = _ref.backgroundImageAnimationDuration,
      backgroundImageAnimationDuration = _ref$backgroundImageA2 === void 0 ? 0 : _ref$backgroundImageA2,
      _ref$sizeAnimationEas = _ref.sizeAnimationEase,
      sizeAnimationEase = _ref$sizeAnimationEas === void 0 ? Expo.easeOut : _ref$sizeAnimationEas,
      _ref$sizeAnimationDur = _ref.sizeAnimationDuration,
      sizeAnimationDuration = _ref$sizeAnimationDur === void 0 ? 0.5 : _ref$sizeAnimationDur,
      _ref$textAnimationEas = _ref.textAnimationEase,
      textAnimationEase = _ref$textAnimationEas === void 0 ? Expo.easeOut : _ref$textAnimationEas,
      _ref$textAnimationDur = _ref.textAnimationDuration,
      textAnimationDuration = _ref$textAnimationDur === void 0 ? 1 : _ref$textAnimationDur,
      _ref$cursorSize = _ref.cursorSize,
      cursorSize = _ref$cursorSize === void 0 ? 48 : _ref$cursorSize,
      _ref$cursorBackgrounC = _ref.cursorBackgrounColor,
      cursorBackgrounColor = _ref$cursorBackgrounC === void 0 ? '#000' : _ref$cursorBackgrounC,
      _ref$exclusionBackgro = _ref.exclusionBackgroundColor,
      exclusionBackgroundColor = _ref$exclusionBackgro === void 0 ? '#fff' : _ref$exclusionBackgro,
      _ref$cursorInnerColor = _ref.cursorInnerColor,
      cursorInnerColor = _ref$cursorInnerColor === void 0 ? '#fff' : _ref$cursorInnerColor;
  var cursor = useRef(null);
  var cursorInner = useRef(null);
  var pos = useInstance(function () {
    return {
      x: 0,
      y: 0
    };
  });
  var vel = useInstance(function () {
    return {
      x: 0,
      y: 0
    };
  });
  var set = useInstance();
  useLayoutEffect(function () {
    set.x = gsap.quickSetter(cursor.current, 'x', 'px');
    set.y = gsap.quickSetter(cursor.current, 'y', 'px');

    if (isGelly) {
      set.r = gsap.quickSetter(cursor.current, 'rotate', 'deg');
      set.sx = gsap.quickSetter(cursor.current, 'scaleX');
      set.sy = gsap.quickSetter(cursor.current, 'scaleY');
      set.width = gsap.quickSetter(cursor.current, 'width', 'px');
      set.rt = gsap.quickSetter(cursorInner.current, 'rotate', 'deg');
    }
  });
  var loop = useCallback(function () {
    var rotation = getAngle(vel.x, vel.y);
    var scale = getScale(vel.x, vel.y);
    set.x(pos.x);
    set.y(pos.y);

    if (isGelly && scale && rotation && cursor.current) {
      var _cursor$current;

      set.width(((_cursor$current = cursor.current) == null ? void 0 : _cursor$current.style.height) + scale * gellyAnimationAmount);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale);
      set.rt(-rotation);
    }
  }, [gellyAnimationAmount, isGelly, pos.x, pos.y, set, vel.x, vel.y]);
  useLayoutEffect(function () {
    var sizeElements = document.querySelectorAll('[data-cursor-size]');
    var textElements = document.querySelectorAll('[data-cursor-text]');
    var colorElements = document.querySelectorAll('[data-cursor-color]');
    var backgroundImageElements = document.querySelectorAll('[data-cursor-background-image]');
    var magneticElements = document.querySelectorAll('[data-cursor-magnetic]');
    var stickElements = document.querySelectorAll('[data-cursor-stick]');
    var exclusionElements = document.querySelectorAll('[data-cursor-exclusion]');
    var stickStatus = false;
    var hasExclusionAlready = false;

    var setFromEvent = function setFromEvent(e) {
      var areatarget = e.target;
      var target;
      var bound;
      var x = e.clientX;
      var y = e.clientY;
      var duration = animationDuration;
      var ease = animationEase;

      if (stickStatus) {
        var _target;

        target = areatarget.querySelector(areatarget.dataset['cursorStick']);
        bound = (_target = target) == null ? void 0 : _target.getBoundingClientRect();

        if (target && bound) {
          y = bound.top + target.clientHeight / 2 - (bound.top + target.clientHeight / 2 - e.clientY) * stickAnimationAmount;
          x = bound.left + target.clientWidth / 2 - (bound.left + target.clientWidth / 2 - e.clientX) * stickAnimationAmount;
          duration = stickAnimationDuration;
          ease = stickAnimationEase;
        }
      }

      gsap.set(pos, {});
      var xTo = gsap.quickTo(pos, 'x', {
        duration: duration,
        ease: ease,
        onUpdate: function onUpdate() {
          if (pos.x) vel.x = x - pos.x;
        }
      });
      var yTo = gsap.quickTo(pos, 'y', {
        duration: duration,
        ease: ease,
        onUpdate: function onUpdate() {
          if (pos.y) vel.y = y - pos.y;
        }
      });
      xTo(x);
      yTo(y);
      loop();
    };

    window.addEventListener('mousemove', function (e) {
      setFromEvent(e);
    });
    document.body.addEventListener('mouseenter', function (e) {
      if (e.target instanceof HTMLElement && cursor.current) {
        gsap.to("#" + cursor.current.id, {
          opacity: 1,
          duration: animationDuration,
          ease: animationEase
        });
      }
    });
    document.body.addEventListener('mouseleave', function (e) {
      if (e.target instanceof HTMLElement && cursor.current) {
        gsap.to("#" + cursor.current.id, {
          opacity: 0,
          duration: animationDuration,
          ease: animationEase
        });
      }
    });
    sizeElements.forEach(function (el) {
      el.addEventListener('mouseenter', function (e) {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to("#" + cursor.current.id, {
            width: "" + e.target.dataset['cursorSize'],
            height: "" + e.target.dataset['cursorSize'],
            duration: sizeAnimationDuration,
            ease: sizeAnimationEase
          });
        }
      });
    });
    sizeElements.forEach(function (el) {
      el.addEventListener('mouseleave', function (e) {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to("#" + cursor.current.id, {
            width: "" + cursorSize,
            height: "" + cursorSize,
            duration: sizeAnimationDuration,
            ease: sizeAnimationEase
          });
        }
      });
    });
    textElements.forEach(function (el) {
      el.addEventListener('mouseenter', function (e) {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          cursorInner.current.textContent = "" + e.target.dataset['cursorText'];
          gsap.to("#" + cursorInner.current.id, {
            scale: 1,
            opacity: 1,
            duration: textAnimationDuration,
            ease: textAnimationEase
          });
        }
      });
    });
    textElements.forEach(function (el) {
      el.addEventListener('mouseleave', function (e) {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          cursorInner.current.textContent = '';
          gsap.to("#" + cursorInner.current.id, {
            scale: 0,
            opacity: 0,
            duration: textAnimationDuration,
            ease: textAnimationEase
          });
        }
      });
    });
    colorElements.forEach(function (el) {
      el.addEventListener('mouseenter', function (e) {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to("#" + cursor.current.id, {
            backgroundColor: "" + e.target.dataset['cursorColor'],
            duration: colorAnimationDuration,
            ease: colorAnimationEase
          });
        }
      });
    });
    colorElements.forEach(function (el) {
      el.addEventListener('mouseleave', function (e) {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to("#" + cursor.current.id, {
            backgroundColor: "" + cursorBackgrounColor,
            duration: colorAnimationDuration,
            ease: colorAnimationEase
          });
        }
      });
    });
    exclusionElements.forEach(function (el) {
      el.addEventListener('mouseenter', function (e) {
        if (e.target instanceof HTMLElement && cursor.current) {
          // @ts-ignore: Unreachable code error
          cursor.current.style.mixBlendMode = 'exclusion';
          cursor.current.style.background = "" + exclusionBackgroundColor;
        }
      });
    });
    exclusionElements.forEach(function (el) {
      el.addEventListener('mouseleave', function (e) {
        if (e.target instanceof HTMLElement && cursor.current) {
          // @ts-ignore: Unreachable code error
          cursor.current.style.mixBlendMode = '';
          cursor.current.style.background = "" + cursorBackgrounColor;
        }
      });
    });
    backgroundImageElements.forEach(function (el) {
      el.addEventListener('mouseenter', function (e) {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          if (cursor.current) {
            // @ts-ignore: Unreachable code error
            if (cursor.current.style.mixBlendMode === 'exclusion') hasExclusionAlready = true; // @ts-ignore: Unreachable code error

            cursor.current.style.mixBlendMode = 'exclusion';
            cursor.current.style.backgroundColor = 'transform';
          }

          gsap.to("#" + cursorInner.current.id, {
            scale: 1,
            opacity: 1,
            background: "url(\"" + e.target.dataset['cursorBackgroundImage'] + "\")",
            filter: 'invert(1)',
            duration: backgroundImageAnimationDuration,
            ease: backgroundImageAnimationEase
          });
        }
      });
    });
    backgroundImageElements.forEach(function (el) {
      el.addEventListener('mouseleave', function (e) {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          if (cursor.current) {
            if (!hasExclusionAlready) {
              // @ts-ignore: Unreachable code error
              cursor.current.style.mixBlendMode = '';
              cursor.current.style.backgroundColor = "" + cursorBackgrounColor;
            } else {
              cursor.current.style.backgroundColor = "" + exclusionBackgroundColor;
            }
          }

          gsap.to("#" + cursorInner.current.id, {
            scale: 0,
            opacity: 0,
            background: "",
            filter: 'none',
            duration: backgroundImageAnimationDuration
          });
        }
      });
    });
    magneticElements.forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var areatarget = e.target;
        gsap.to(areatarget, {
          x: (e.clientX - (areatarget.offsetLeft - window.pageXOffset) - areatarget.clientWidth / 2) * magneticAnimationAmount,
          y: (e.clientY - (areatarget.offsetTop - window.pageYOffset) - areatarget.clientHeight / 2) * magneticAnimationAmount,
          duration: magneticAnimationDuration,
          ease: magneticAnimationEase
        });
      });
    });
    magneticElements.forEach(function (el) {
      el.addEventListener('mouseleave', function (e) {
        var areatarget = e.target;
        gsap.to(areatarget, {
          x: 0,
          y: 0,
          duration: magneticAnimationDuration,
          ease: magneticAnimationEase
        });
      });
    });
    stickElements.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        return stickStatus = true;
      });
    });
    stickElements.forEach(function (el) {
      el.addEventListener('mouseleave', function () {
        return stickStatus = false;
      });
    });
    return function () {
      window.removeEventListener('mousemove', setFromEvent);
      document.body.removeEventListener('mouseenter', function () {});
      document.body.removeEventListener('mouseleave', function () {});
      sizeElements.forEach(function (el) {
        el.removeEventListener('mouseenter', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
      textElements.forEach(function (el) {
        el.removeEventListener('mouseenter', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
      colorElements.forEach(function (el) {
        el.removeEventListener('mouseenter', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
      exclusionElements.forEach(function (el) {
        el.removeEventListener('mouseenter', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
      backgroundImageElements.forEach(function (el) {
        el.removeEventListener('mouseenter', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
      magneticElements.forEach(function (el) {
        el.removeEventListener('mousemove', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
      stickElements.forEach(function (el) {
        el.removeEventListener('mouseenter', function () {});
        el.removeEventListener('mouseleave', function () {});
      });
    };
  });
  useTicker(loop);
  return React.createElement("div", {
    ref: cursor,
    id: 'c-cursor',
    className: "c-cursor",
    style: {
      width: cursorSize,
      height: cursorSize,
      background: cursorBackgrounColor
    }
  }, React.createElement("div", {
    style: {
      color: cursorInnerColor
    },
    ref: cursorInner,
    id: 'c-cursorInner',
    className: "c-cursor__inner"
  }));
};

export { Cursor };
//# sourceMappingURL=react-creative-cursor.esm.js.map
