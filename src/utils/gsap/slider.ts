import gsap from "gsap/all";
import Draggable from "gsap/Draggable";
import { Dispatch, SetStateAction } from "react";

export default function animateSlider (setWrapperClass:Dispatch<SetStateAction<string>>, setLineWidth:Dispatch<SetStateAction<string>>) {

    gsap.registerPlugin(Draggable)

    var horizontal_container = document.querySelector(".horizontal-container");
  
    Draggable.create(".horizontal-container", {
        type: "x",
        bounds: ".slider-container",
        onDragStart: function () {
            setWrapperClass("active");
        },
        onDragEnd: function () {
            setWrapperClass('');
        },
        onDrag: function () {

            function getMatrix(element:any) {
                const values = element.style.transform.split(/\w+\(|\);?/);
                const transform = values[1].split(/,\s?/g).map(parseInt);
                return Math.abs(transform[0]);
            }
            var fullwidth = getMatrix(horizontal_container); //1167 in desktop
            var fullwidthPer = 0.039;

            setLineWidth((25 + (fullwidth * fullwidthPer)) + '%')

            //changeFactor for seperate line width in responsive
            // var windowWidth = window.innerWidth;

            // function changeFactor(windowWidth:any) {

            // if (windowWidth > 200 && windowWidth < 599) {
            //     fullwidthPer = 0.08;
            // }
            // if (windowWidth > 600 && windowWidth < 800) {
            //     fullwidthPer = 0.24;
            // }
            // if (windowWidth > 801 && windowWidth < 1200) {
            //     fullwidthPer = 0.033;
            // }
            // if (windowWidth > 1201 && windowWidth < 1400) {
            //     fullwidthPer = 0.038;
            // }
            // }

            // changeFactor(windowWidth);

            //   $(window).resize(function () {
            //     changeFactor(windowWidth);
            //   });

        },
        snap: {
            x: function (value) {
                //snap to the closest increment of 50.
                return Math.round(value / 305) * 305;
            }
        }
    });

}