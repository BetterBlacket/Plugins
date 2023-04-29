/**
 * @name Smooth Load
 * @authorId 3324853
 * @version 1.0.0
 * @description A nice loader without any bouncing to it.
 * @source https://github.com/VillainsRule/BB-Plugins/blob/main/smoothload
 */

$(`head`).append(`
  <style>
    @keyframes __bbsmoothload {
      6% {
        transform: rotate(22.5deg);
      }

      12% {
        transform: rotate(45deg);
      }

      18% {
        transform: rotate(67.5deg);
      }

      24% {
        transform: rotate(90deg);
      }

      30% {
        transform: rotate(112.5deg);
      }
    
      36% {
        transform: rotate(157.5deg);
      }

      42% {
        transform: rotate(180deg);
      }
    
      48% {
        transform: rotate(202.5deg);
      }

      54% {
        transform: rotate(225deg);
      }

      60% {
        transform: rotate(247.5deg);
      }

      68% {
        transform: rotate(270deg);
      }

      72% {
        transform: rotate(292.5deg);
      }

      77% {
        transform: rotate(315deg);
      }

      84% {
        transform: rotate(337.5deg);
      }

      90% {
        transform: rotate(1turn);
      }
    
      100% {
        transform: rotate(0deg);
	    }
    }

    .loaderBox {
      width: 35px;
      height: 40.25px;
      -webkit-animation: __bbsmoothload 2s linear infinite !important;
      animation: __bbsmoothload 2s linear infinite !important;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
      z-index: 3;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
  </style>
`);
