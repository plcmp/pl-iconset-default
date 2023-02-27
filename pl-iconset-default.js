import { html } from "polylib";
import '@plcmp/pl-iconset';

const template = html`
    <pl-iconset iconset="pl-default">
        <svg>
            <defs>
                <g id="arrow-up">
                    <path fill-rule="evenodd"
                        d="M7.854 3.646L7.5 3.293l-.354.353-5 5 .708.708L7 5.207V14h1V5.207l4.146 4.147.708-.708-5-5z" />
                </g>
                <g id="arrow-down">
                    <path fill-rule="evenodd"
                        d="M8 10.793V2H7v8.793L2.854 6.646l-.708.708 5 5 .354.353.354-.353 5-5-.707-.708L8 10.793z" />
                </g>
                <g id="arrow-left">
                    <path fill-rule="evenodd"
                        d="M3.646 7.146l-.353.354.353.354 5 5 .708-.708L5.207 8H14V7H5.207l4.147-4.146-.708-.708-5 5z" />
                </g>
                <g id="arrow-right">
                    <path fill-rule="evenodd"
                        d="M12.354 7.854l.353-.354-.353-.354-5-5-.708.708L10.793 7H2v1h8.793l-4.147 4.146.708.708 5-5z" />
                </g>
                <g id="attachment">
                    <path fill-rule="evenodd"
                        d="M10 3.5a3.5 3.5 0 10-7 0V11a5 5 0 0010 0V3h-1v8a4 4 0 01-8 0V3.5a2.5 2.5 0 015 0v7a1 1 0 11-2 0V4H6v6.5a2 2 0 104 0v-7z" />
                </g>
                <g id="attachment-2">
                    <path fill-rule="evenodd"
                        d="M7.646 1.646a3.328 3.328 0 114.708 4.708l-5 5a1.914 1.914 0 01-2.708-2.708l5-5 .707.708-5 5a.914.914 0 101.293 1.292l5-5a2.328 2.328 0 00-3.292-3.292l-5 5a3.743 3.743 0 105.292 5.292l5-5 .707.708-5 5a4.743 4.743 0 01-6.707-6.708l5-5z" />
                </g>
                <g id="book">
                    <path fill-rule="evenodd"
                        d="M1 1h3a3 3 0 013 3v9.764A2.99 2.99 0 005 13H1V1zm6 15a2 2 0 00-2-2H0V0h4c1.506 0 2.818.832 3.5 2.062A3.999 3.999 0 0111 0h4v14h-5a2 2 0 00-2 2H7zm1-2.236A2.99 2.99 0 0110 13h4V1h-3a3 3 0 00-3 3v9.764z" />
                </g>
                <g id="date">
                    <path fill-rule="evenodd" d="M4 0v2H0v14h16V2h-4V0h-1v2H5V0H4zm7 3H1v3h14V3h-4zM1 15V7h14v8H1z" />
                </g>
                <g id="time">
                    <path fill-rule="evenodd"
                        d="M1 7.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm-1 0a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0zM8 3v4h3v1H7V3h1z" />
                </g>
                <g id="datetime">
                    <path fill-rule="evenodd"
                        d="M3 0v2H0v13h7v-1H1V6h13v1h1V2h-3V0h-1v2H4V0H3zm11 5H1V3h13v2zm-2 10a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zm-.5-6v3H14v-1h-1.5v-2h-1z" />
                </g>
                <g id="catalog">
                    <path fill-rule="evenodd"
                        d="M13 1H3a2 2 0 00-2 2v8.5a2.49 2.49 0 011.5-.5H8v1H2.5a1.5 1.5 0 00-1.482 1.268A2 2 0 003 15h5v1H2.5a2.5 2.5 0 01-2.489-2.739A3.037 3.037 0 010 13V3a3 3 0 013-3h11v8h-1V1zm-1 13a2 2 0 100-4 2 2 0 000 4zm2.445-.261a3 3 0 10-.707.707L15.302 16h.7v-.7l-1.556-1.561z" />
                </g>
                <g id="catalog-2">
                    <path fill-rule="evenodd"
                        d="M4 1v14h11V1H4zM3 15V1H1v14h2zM3 0h13v16H0V0h3zm9 5H6V4h6v1zM6 8h4V7H6v1z" />
                </g>
                <g id="catalog-3">
                    <path fill-rule="evenodd"
                        d="M5 1h9a1 1 0 011 1v12a1 1 0 01-1 1H5V1zM4 1H2v14h2V1zm1-1h9a2 2 0 012 2v12a2 2 0 01-2 2H1V0h4zm4.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.086-.121a2.5 2.5 0 10-.707.707l1.772 1.772.707-.707-1.772-1.772z" />
                </g>
                <g id="check-s">
                    <path fill-rule="evenodd"
                        d="M12.384 5.32l-5 6-.35.42-.388-.386-3-3 .708-.708 2.612 2.613 4.65-5.58.768.641z" />
                </g>
                <g id="check">
                    <path fill-rule="evenodd"
                        d="M14.384 3.32l-7.5 9-.35.42-.388-.386-4.5-4.5.708-.708 4.112 4.113 7.15-8.58.768.641z" />
                </g>
                <g id="check-circle">
                    <path fill-rule="evenodd"
                        d="M1 8a7 7 0 1014 0A7 7 0 001 8zM0 8a8 8 0 1016 0A8 8 0 000 8zm7.384 3.32l5-6-.768-.64-4.65 5.58-2.612-2.614-.708.708 3 3 .388.387.35-.42z" />
                </g>
                <g id="check-circle-filled">
                    <path fill-rule="evenodd"
                        d="M8 16A8 8 0 118 0a8 8 0 010 16zm-.616-4.68l5-6-.768-.64-4.65 5.58-2.612-2.614-.708.708 3 3 .388.387.35-.42z" />
                </g>
                <g id="chevron-up-s">
                    <path fill-rule="evenodd"
                        d="M8 5.293l.354.353 4 4-.707.708L8 6.707l-3.646 3.647-.708-.708 4-4L8 5.293z" />
                </g>
                <g id="chevron-down-s">
                    <path fill-rule="evenodd"
                        d="M8 10.707l.354-.353 4-4-.708-.708L8 9.293 4.354 5.646l-.708.708 4 4 .354.353z" />
                </g>
                <g id="chevron-left-s">
                    <path fill-rule="evenodd"
                        d="M5.293 8l.353-.354 4-4 .707.708L6.708 8l3.647 3.646-.708.708-4-4L5.293 8z" />
                </g>
                <g id="chevron-right-s">
                    <path fill-rule="evenodd"
                        d="M10.707 8l-.354.354-4 4-.707-.707L9.293 8 5.646 4.354l.708-.708 4 4 .353.354z" />
                </g>
                <g id="chevron-up">
                    <path fill-rule="evenodd"
                        d="M8 4.293l.354.353 5 5-.707.708L8 5.707l-4.646 4.647-.708-.708 5-5L8 4.293z" />
                </g>
                <g id="chevron-down">
                    <path fill-rule="evenodd"
                        d="M8 11.707l.354-.353 5-5-.707-.708L8 10.293 3.354 5.646l-.708.708 5 5 .354.353z" />
                </g>
                <g id="chevron-left">
                    <path fill-rule="evenodd"
                        d="M4.293 8l.353-.354 5-5 .707.708L5.708 8l4.647 4.646-.708.708-5-5L4.293 8z" />
                </g>
                <g id="chevron-right">
                    <path fill-rule="evenodd"
                        d="M11.707 8l-.353.354-5 5-.708-.708L10.293 8 5.646 3.354l.708-.708 5 5 .353.354z" />
                </g>
                <g id="chart-bar">
                    <path fill-rule="evenodd" d="M15 1h-4v14h4V1zm-5 0v3H5v4H0v8h16V0h-6v1zM6 15h4V5H6v10zM5 9H1v6h4V9z" />
                </g>
                <g id="chart-pie">
                    <path fill-rule="evenodd"
                        d="M14.467 5.321A7 7 0 0114.928 7H9V1.072a7.001 7.001 0 015.467 4.25zM16 8a8 8 0 00-8-8v8h8zM7 9h7a7.002 7.002 0 01-8.366 6.866A7 7 0 017 2v7zm0 1h5.916A6 6 0 116 3.084V10h1z" />
                </g>
                <g id="close-s">
                    <path fill-rule="evenodd"
                        d="M8.707 8l3.146-3.146-.707-.708L8 7.293 4.854 4.146l-.708.708L7.293 8l-3.147 3.146.708.708L8 8.707l3.146 3.147.707-.707L8.707 8z" />
                </g>
                <g id="close">
                    <path fill-rule="evenodd"
                        d="M8.707 8l5.646-5.646-.707-.708L8 7.293 2.354 1.646l-.708.708L7.293 8l-5.647 5.646.708.708L8 8.707l5.646 5.647.707-.707L8.707 8z" />
                </g>
                <g id="close-circle">
                    <path fill-rule="evenodd"
                        d="M1 8a7 7 0 1014 0A7 7 0 001 8zM0 8a8 8 0 1016 0A8 8 0 000 8zm11.354-2.646L8.707 8l2.647 2.646-.708.708L8 8.707l-2.646 2.647-.708-.708L7.293 8 4.646 5.354l.708-.708L8 7.293l2.646-2.647.708.708z" />
                </g>
                <g id="close-circle-filled">
                    <path fill-rule="evenodd"
                        d="M0 8a8 8 0 1016 0A8 8 0 000 8zm8 .707l-2.646 2.647-.708-.708L7.293 8 4.646 5.354l.708-.708L8 7.293l2.646-2.647.708.708L8.707 8l2.647 2.646-.708.708L8 8.707z" />
                </g>
                <g id="code">
                    <path fill-rule="evenodd"
                        d="M6.474 14.158l4-12-.948-.316-4 12 .948.316zM.2 7.6l4-3 .6.8L1.333 8 4.8 10.6l-.6.8-4-3a.5.5 0 010-.8zm14.467.4L11.2 5.4l.6-.8 4 3a.5.5 0 010 .8l-4 3-.6-.8L14.667 8z" />
                </g>
                <g id="copy">
                    <path fill-rule="evenodd" d="M15 1H4V0h12v12h-1V1zM1 5h10v10H1V5zM0 4h12v12H0V4z" />
                </g>
                <g id="database">
                    <path fill-rule="evenodd"
                        d="M12.454 5.96C13.572 5.321 14 4.59 14 4c0-.59-.428-1.321-1.546-1.96C11.364 1.417 9.79 1 8 1s-3.364.417-4.454 1.04C2.428 2.679 2 3.41 2 4c0 .59.428 1.321 1.546 1.96C4.636 6.583 6.21 7 8 7s3.364-.417 4.454-1.04zM1 4v8c0 2.21 3.134 4 7 4s7-1.79 7-4V4c0-2.21-3.134-4-7-4S1 1.79 1 4zm13 2.061C12.775 7.223 10.546 8 8 8s-4.775-.777-6-1.939V8c0 .59.428 1.321 1.546 1.96C4.636 10.583 6.21 11 8 11s3.364-.417 4.454-1.04C13.572 9.321 14 8.59 14 8V6.061zm0 4C12.775 11.224 10.546 12 8 12s-4.775-.777-6-1.938V12c0 .59.428 1.321 1.546 1.96C4.636 14.583 6.21 15 8 15s3.364-.417 4.454-1.04C13.572 13.321 14 12.59 14 12V10.062z" />
                </g>
                <g id="download">
                    <path fill-rule="evenodd"
                        d="M8 0v9.793l4.146-4.147.708.708-5 5-.354.353-.354-.353-5-5 .708-.708L7 9.793V0h1zM1 11v4h13v-4h1v5H0v-5h1z" />
                </g>
                <g id="eye-closed">
                    <path fill-rule="evenodd"
                        d="M1.48 3.862L1 4l-.48.138v.002l.001.005.005.015a3.288 3.288 0 00.079.235 9.13 9.13 0 001.662 2.803L.584 9.723l.832.554L2.988 7.92a7.2 7.2 0 002.379 1.4l-.841 2.522.948.316.858-2.572C6.846 9.69 7.4 9.75 8 9.75c.6 0 1.154-.059 1.668-.164l.858 2.572.948-.316-.84-2.523a7.2 7.2 0 002.378-1.399l1.572 2.357.832-.554-1.683-2.525a9.129 9.129 0 001.662-2.803 5.646 5.646 0 00.08-.235l.004-.015.001-.005v-.002L15 4l-.48-.138-.003.008-.011.036a7.115 7.115 0 01-.28.705 8.13 8.13 0 01-1.052 1.7C12.182 7.534 10.565 8.75 8 8.75c-2.565 0-4.182-1.215-5.174-2.44a8.13 8.13 0 01-1.28-2.254 4.458 4.458 0 01-.063-.186l-.002-.007z" />
                </g>
                <g id="eye-opened">
                    <path fill-rule="evenodd"
                        d="M8 10a2.5 2.5 0 00.004-5H8C5.435 5 3.818 6.215 2.826 7.44a8.13 8.13 0 00-1.28 2.254 4.474 4.474 0 00-.063.186l-.002.007L1 9.75l-.48-.138V9.61l.001-.005.005-.015a3.293 3.293 0 01.079-.235A9.13 9.13 0 012.049 6.81C3.182 5.41 5.063 4 7.994 4h.011c2.932.002 4.813 1.41 5.946 2.81a9.129 9.129 0 011.444 2.545 5.646 5.646 0 01.08.235l.004.015.001.005v.002L15 9.75l-.48.138-.003-.008a7.115 7.115 0 00-.291-.741 8.13 8.13 0 00-1.052-1.7 6.548 6.548 0 00-2.198-1.782 3.5 3.5 0 11-6.16 3.299l.847-.565A2.5 2.5 0 008 10z" />
                </g>
                <g id="file">
                    <path fill-rule="evenodd" d="M14 6H9V1H2v14h12V6zM9 0h1l5 5v11H1V0h8zm1 1.414V5h3.586L10 1.414z" />
                </g>
                <g id="filter">
                    <path fill-rule="evenodd"
                        d="M10 10l5-5V1H1v4l5 5v6l1-.5 3-1.5v-4zm-1 3.382V9.586l.293-.293L14 4.586V2H2v2.586l4.707 4.707.293.293V14.382l2-1z" />
                </g>
                <g id="filter-s">
                    <path fill-rule="evenodd"
                        d="M10 9l4-4V2H2v3l4 4v6l1-.75L10 12V9zm-1 2.5V8.586l.293-.293L13 4.586V3H3v1.586l3.707 3.707.293.293V13l2-1.5z" />
                </g>
                <g id="history">
                    <path fill-rule="evenodd"
                        d="M.854 6.646l1.149 1.15a7 7 0 111.149 4.052l.724-.724a6 6 0 10-.873-3.334l1.143-1.144.708.708-2 2-.354.353-.354-.353-2-2 .708-.708zM9 4v4h3v1H8V4h1z" />
                </g>
                <g id="home">
                    <path fill-rule="evenodd"
                        d="M2 14V5.515l6-4.286 6 4.286V14h-3V8H5v6H2zm4 0h4V9H6v5zm-1 1H1V5l7-5 7 5v10H5z" />
                </g>
                <g id="info-circle">
                    <path fill-rule="evenodd"
                        d="M7.5 14a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm0 1a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM8 7v4H7V7h1zm0-1V4H7v2h1z" />
                </g>
                <g id="layers">
                    <path fill-rule="evenodd"
                        d="M0 4l1.118.559L8 8l6.882-3.441L16 4l-1.118-.559L8 0 1.118 3.441 0 4zm2.236 0L8 6.882 13.764 4 8 1.118 2.236 4zM1.1 7.45L0 8l1.118.559L8 12l6.882-3.441L16 8l-1.1-.55L8 10.9 1.1 7.45zM0 12l1.1-.55L8 14.9l6.9-3.45L16 12l-1.118.559L8 16l-6.882-3.441L0 12z" />
                </g>
                <g id="link">
                    <path fill-rule="evenodd"
                        d="M10.354 2.354a2.328 2.328 0 013.293 3.292l-3.38 3.38a2.5 2.5 0 01-3.535 0l-.378-.38-.708.708.38.378a3.5 3.5 0 004.949 0l3.379-3.378a3.328 3.328 0 00-4.707-4.708l-1.5 1.5.707.708 1.5-1.5zM5.647 13.646a2.328 2.328 0 11-3.293-3.292l3.378-3.38a2.5 2.5 0 013.536 0l.378.38.708-.708-.38-.378a3.5 3.5 0 00-4.949 0L1.647 9.646a3.328 3.328 0 004.707 4.708l1.5-1.5-.708-.708-1.5 1.5z" />
                </g>
                <g id="link-2">
                    <path fill-rule="evenodd"
                        d="M4.5 11H7v1H4.5a4.5 4.5 0 010-9H7v1H4.5a3.5 3.5 0 100 7zM9 12v-1h2.5a3.5 3.5 0 100-7H9V3h2.5a4.5 4.5 0 110 9H9zM4 8h8V7H4v1z" />
                </g>
                <g id="logout">
                    <path fill-rule="evenodd"
                        d="M7 .36V2h3v4H9V3H7v9h2V9h1v4H7V14.64l-.621-.155-6-1.5L0 12.89V2.11l.379-.095 6-1.5L7 .36zM1 2.89v9.22l5 1.25V1.64L1 2.89zM13.793 7l-1.647-1.646.708-.708 2.5 2.5.353.354-.353.354-2.5 2.5-.708-.708L13.793 8H9V7h4.793z" />
                </g>
                <g id="logout-filled">
                    <path fill-rule="evenodd"
                        d="M7 2V.36L0 2.11v10.78l7 1.75V13h3V9H9v3H7V3h2v3h1V2H7zm6.793 5l-1.647-1.646.708-.708 2.5 2.5.353.354-.353.354-2.5 2.5-.708-.708L13.793 8H8V7h5.793z" />
                </g>
                <g id="mail">
                    <path fill-rule="evenodd"
                        d="M0 2h16v12H0V2zm1.84 1L8 8.338 14.16 3H1.84zM15 3.595L8.327 9.378 8 9.662l-.327-.284L1 3.595V13h14V3.595z" />
                </g>
                <g id="minus-s">
                    <path fill-rule="evenodd" d="M13 8H3V7h10v1z" />
                </g>
                <g id="minus">
                    <path fill-rule="evenodd" d="M16 8H0V7h16v1z" />
                </g>
                <g id="minus-circle">
                    <path fill-rule="evenodd"
                        d="M1 7.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm-1 0a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0zM11 8V7H4v1h7z" />
                </g>
                <g id="minus-circle-filled">
                    <path fill-rule="evenodd" d="M7.5 15a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM11 8V7H4v1h7z" />
                </g>
                <g id="more-vertical">
                    <path fill-rule="evenodd"
                        d="M8 4a1 1 0 110-2 1 1 0 010 2zm0 5a1 1 0 110-2 1 1 0 010 2zm-1 4a1 1 0 102 0 1 1 0 00-2 0z" />
                </g>
                <g id="more-horizontal">
                    <path fill-rule="evenodd"
                        d="M4 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </g>
                <g id="night">
                    <path fill-rule="evenodd"
                        d="M13 11a8 8 0 01-7.881-9.382A7.002 7.002 0 008 15a7.003 7.003 0 006.382-4.12c-.45.08-.911.12-1.382.12zm1.774-1.227c.383-.1.753-.231 1.107-.392A8.003 8.003 0 018 16 8 8 0 016.618.119 6.947 6.947 0 006 3a7 7 0 008.774 6.773z" />
                </g>
                <g id="notifications">
                    <path fill-rule="evenodd"
                        d="M14 6v3l1 1v3h-4a3 3 0 11-6 0H1v-3l1-1V6a6 6 0 1112 0zm-8 7a2 2 0 104 0H6zm7.293-3.293l.707.707V12H2v-1.586l.707-.707L3 9.414V6a5 5 0 0110 0v3.414l.293.293z" />
                </g>
                <g id="paste">
                    <path fill-rule="evenodd" d="M6 1h4v2H6V1zM5 2V0h6v2h3v14H2V2h3zm0 1H3v12h10V3h-2v1H5V3z" />
                </g>
                <g id="person">
                    <path fill-rule="evenodd"
                        d="M8 7a3 3 0 110-6 3 3 0 010 6zM4 4a4 4 0 118 0 4 4 0 01-8 0zm4 5a7 7 0 00-7 7h1a6 6 0 0112 0h1a7 7 0 00-7-7z" />
                </g>
                <g id="person-add">
                    <path fill-rule="evenodd"
                        d="M4 4a3 3 0 106 0 3 3 0 00-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm0 10.5A5.5 5.5 0 001.5 16h-1A6.5 6.5 0 017 9.5v1zM12 9v3H9v1h3v3h1v-3h3v-1h-3V9h-1z" />
                </g>
                <g id="person-group">
                    <path fill-rule="evenodd"
                        d="M5.5 7a2 2 0 110-4 2 2 0 010 4zm-3-2a3 3 0 116 0 3 3 0 01-6 0zM12 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM9.5 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm-9.5 8a5.5 5.5 0 1111 0V16h-1v-1.5a4.5 4.5 0 10-9 0V16H0v-1.5zM12 11a3 3 0 013 3v2h1v-2a4 4 0 00-4-4v1z" />
                </g>
                <g id="pencil">
                    <path fill-rule="evenodd"
                        d="M1 15v-2.586l7.854-7.853 2.585 2.585L3.586 15H1zm11.146-8.56L14.586 4 12 1.414l-2.44 2.44 2.586 2.585zM0 12L11.293.707 12 0l.707.707 2.586 2.586L16 4l-.707.707L4 16H0v-4z" />
                </g>
                <g id="plus-s">
                    <path fill-rule="evenodd" d="M8 7V3H7v4H3v1h4v4h1V8h4V7H8z" />
                </g>
                <g id="plus">
                    <path fill-rule="evenodd" d="M8 7V1H7v6H1v1h6v6h1V8h6V7H8z" />
                </g>
                <g id="plus-circle">
                    <path fill-rule="evenodd"
                        d="M7.5 14a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm0 1a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM8 8v4H7V8H3V7h4V3h1v4h4v1H8z" />
                </g>
                <g id="plus-circle-filled">
                    <path fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0zM8 8v4H7V8H3V7h4V3h1v4h4v1H8z" />
                </g>
                <g id="print">
                    <path fill-rule="evenodd"
                        d="M4 1h8v2H4V1zM3 3V0h10v3h3v10h-3v3H3v-3H0V3h3zm1 9v3h8v-5H4v2zm9 0V9H3v3H1V4h14v8h-2zm0-6v2h-2V6h2z" />
                </g>
                <g id="profile">
                    <path fill-rule="evenodd"
                        d="M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2 5 5 0 0110 0 2 2 0 002-2V3a2 2 0 00-2-2zm-1 14a4 4 0 00-8 0h8zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm3 6a2 2 0 104 0 2 2 0 00-4 0zm2-3a3 3 0 100 6 3 3 0 000-6z" />
                </g>
                <g id="reload">
                    <path fill-rule="evenodd"
                        d="M7.312.11l2.5 2 .488.39-.488.39-2.5 2-.624-.78L8.075 3H8a5 5 0 00-3.636 8.432l-.728.686A6 6 0 018 2h.075L6.688.89l.624-.78zM13 8a4.981 4.981 0 00-1.364-3.432l.728-.686A6 6 0 018 14h-.075l1.387 1.11-.624.78-2.5-2-.488-.39.488-.39 2.5-2 .624.78L7.925 13H8a5 5 0 005-5z">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                            keyTimes="0;1" values="0 8 8;360 8 8"></animateTransform>
                    </path>
                </g>
                <g id="repeat">
                    <path fill-rule="evenodd"
                        d="M9.82 3.116l-3-2.5-.64.768L8.119 3H7.5a6.5 6.5 0 105.28 2.708l-.812.584A5.5 5.5 0 117.5 4h.619l-1.94 1.616.641.768 3-2.5.461-.384-.46-.384z" />
                </g>
                <g id="report">
                    <path fill-rule="evenodd"
                        d="M14 6H9V1H2v14h12V6zM9 0h1l5 5v11H1V0h8zm1 1.414V5h3.586L10 1.414zM4 5h3v1H4V5zm6 4V8H4v1h6zm-6 2h3v1H4v-1zm8 1a1 1 0 11-2 0 1 1 0 012 0zm1 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </g>
                <g id="save">
                    <path fill-rule="evenodd"
                        d="M11 4V1.414l4 4V15H1V1h3v4h7V4zM5 0H0v16h16V5l-5-5H5zm0 4V1h5v3H5zm5 6a2 2 0 11-4 0 2 2 0 014 0zm1 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </g>
                <g id="search">
                    <path fill-rule="evenodd"
                        d="M12 7A5 5 0 112 7a5 5 0 0110 0zm-1.126 4.582a6 6 0 11.707-.707l3.773 3.771-.708.708-3.772-3.772z">
                        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="1s"
                            keyTimes="0;0.5;1" values="0 8 8;90 8 8;0 8 8"></animateTransform>
                    </path>
                </g>
                <g id="send">
                    <path fill-rule="evenodd"
                        d="M1.211 14.953l-.692-.59L2.48 7.5.52.637l.691-.59 15 7v.906l-15 7zm.571-13.536L3.377 7h6.327v1H3.377l-1.595 5.583L14.818 7.5 1.782 1.417z" />
                </g>
                <g id="settings">
                    <path fill-rule="evenodd"
                        d="M10.5 1v.998c.53.221 1.024.51 1.471.856l.848-.506.86-.513.486.874L16 6l-1.585.946a6.548 6.548 0 010 2.108L16 10l-1.835 3.291-.487.874-.859-.513-.848-.506a6.494 6.494 0 01-1.471.856V16h-5v-1.998a6.496 6.496 0 01-1.471-.856l-.848.506-.86.513-.486-.874L0 10l1.585-.946a6.546 6.546 0 010-2.108L0 6l1.835-3.291.487-.874.859.513.848.506A6.494 6.494 0 015.5 1.998V0h5v1zm1.984 2.713l.822-.491 1.348 2.417-.752.449-.583.348.109.671a5.544 5.544 0 010 1.786l-.11.671.584.348.752.449-1.348 2.417-.822-.49-.585-.35-.54.417a5.5 5.5 0 01-1.244.724l-.615.256V15h-3v-1.665l-.615-.256a5.497 5.497 0 01-1.245-.724l-.539-.417-.585.35-.822.49-1.348-2.417.752-.448.583-.349-.109-.671a5.545 5.545 0 010-1.786l.11-.671-.584-.349-.752-.448 1.348-2.417.822.49.585.35.54-.417c.378-.293.796-.537 1.244-.724l.615-.256V1h3v1.665l.615.256c.448.187.866.431 1.245.724l.539.417.585-.35zM10 8a2 2 0 11-4 0 2 2 0 014 0zm1 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </g>
                <g id="settings-2">
                    <path fill-rule="evenodd"
                        d="M4 7a2 2 0 110-4 2 2 0 010 4zm0-5a3 3 0 013 3h8v1H6.83A3.001 3.001 0 114 2zm8 11a2 2 0 110-4 2 2 0 010 4zm-2.83-1A3.001 3.001 0 109 11H1v1h8.17z" />
                </g>
                <g id="star">
                    <path fill-rule="evenodd"
                        d="M10 6L8.527 1.581 8 0l-.527 1.581L6 6H.5l1.286 1L5 9.5l-1.405 3.863L3 15l1.427-1L8 11.5l3.573 2.5L13 15l-.595-1.637L11 9.5 14.214 7 15.5 6H10zm2.585 1H9.28l-.229-.684L8 3.162 6.949 6.316 6.72 7H3.415l2.199 1.71.575.448-.25.684-.916 2.521 2.404-1.682.573-.402.574.402 2.403 1.682-.917-2.521-.249-.684.575-.447L12.586 7z" />
                </g>
                <g id="star-filled">
                    <path d="M8 0l2 6h5.5L11 9.5l2 5.5-5-3.5L3 15l2-5.5L.5 6H6l2-6z" />
                </g>
                <g id="triangle-up">
                    <path d="M8 5l-4 6h8L8 5z" />
                </g>
                <g id="triangle-down">
                    <path d="M8 11L4 5h8l-4 6z" />
                </g>
                <g id="triangle-left">
                    <path d="M4 8l6-4v8L4 8z" />
                </g>
                <g id="triangle-right">
                    <path d="M12 8l-6 4V4l6 4z" />
                </g>
                <g id="trashcan">
                    <path fill-rule="evenodd"
                        d="M6 1h4v2H6V1zM5 3V0h6v3h4v1h-1v12H2V4H1V3h4zm6 1H3v11h10V4h-2zM7 6v7H6V6h1zm3 7V6H9v7h1z" />
                </g>
                <g id="menu">
                    <path fill-rule="evenodd" d="M15 4H1V3h14v1zm0 4H1V7h14v1zM1 12h14v-1H1v1z" />
                </g>
                <g id="warning">
                    <path fill-rule="evenodd"
                        d="M0 15l.5-1L6.941 1.118 7.5 0l.559 1.118L14.5 14l.5 1H0zM7.5 2.236L13.382 14H1.618L7.5 2.236zM8 6v4H7V6h1zm0 5v2H7v-2h1z" />
                </g>
                <g id="warning-circle">
                    <path fill-rule="evenodd"
                        d="M7.5 14a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm0 1a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM8 4v4H7V4h1zm0 7V9H7v2h1z" />
                </g>
                <g id="upload">
                    <path fill-rule="evenodd"
                        d="M10.803 5.34l.251.713.755-.047A3 3 0 1112 12h-1.999v1h2a4 4 0 10-.253-7.992 4.502 4.502 0 00-8.723 1.024A3.5 3.5 0 003.5 13H5v-1H3.5a2.5 2.5 0 01-.341-4.977l.779-.106.08-.782a3.5 3.5 0 016.785-.796zM7.5 6.792l.354.353 2.5 2.5-.708.708L8 8.707V15H7V8.707l-1.646 1.647-.708-.708 2.5-2.5.354-.353z" />
                </g>
                <g id="table">
                    <path fill-rule="evenodd" d="M5 2H2v3h3V2zm0-1h10v14H1V1h4zm1 13h8V6H6v8zM5 6v8H2V6h3zm1-1h8V2H6v3z" />
                </g>
                <g id="view">
                    <path fill-rule="evenodd"
                        d="M1 1h14v8h-1V6H6v4H5V6H2v8h3v1H1V1zm5 4h8V2H6v3zM5 2v3H2V2h3zm2.252 11c1.151 1.389 2.495 2 3.748 2 1.253 0 2.597-.611 3.748-2-1.151-1.389-2.495-2-3.748-2-1.253 0-2.597.611-3.748 2zM6 13c2.761-4 7.239-4 10 0-2.761 4-7.239 4-10 0zm6-1h-2v2h2v-2z" />
                </g>
                <g id="trigger">
                    <path fill-rule="evenodd"
                        d="M1.5 1H1v14h8v-1H6V6h9V1H1.5zM5 6v8H2V6h3zm9-1H6V2h8v3zM5 5V2H2v3h3zm9 2l-4 5h2v4l4-5h-2V7z" />
                </g>
                <g id="function">
                    <path fill-rule="evenodd"
                        d="M7 3.5a1.5 1.5 0 113 0V4h1v-.5a2.5 2.5 0 00-5 0v3H4v1h2v5a1.5 1.5 0 01-3 0V11H2v1.5a2.5 2.5 0 005 0v-5h2v-1H7v-3zm4.293 8.5l-1.647-1.646.708-.708L12 11.293l1.646-1.647.708.708L12.707 12l1.647 1.646-.708.708L12 12.707l-1.646 1.647-.708-.708L11.293 12z" />
                </g>
                <g id="sequence">
                    <path fill-rule="evenodd"
                        d="M6 3.5a2.5 2.5 0 01-2 2.45v4.1c.32.065.616.19.879.364l5.535-5.535a2.5 2.5 0 11.707.707L5.586 11.12A2.5 2.5 0 113 10.05v-4.1A2.5 2.5 0 116 3.5zm8 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </g>
            </defs>
        </svg>
    </pl-iconset>
    <pl-iconset iconset="pl-filetypes">
        <svg>
            <defs>
                <g id="csv">
                    <path fill-rule="evenodd"
                        d="M2.5 0H2v9h1V1h6v4h4v4h1V3.793l-.146-.147-3.5-3.5L10.207 0H2.5zM10 1.207V4h2.793L10 1.207zM4.5 11a2.5 2.5 0 000 5H5v-1h-.5a1.5 1.5 0 010-3H5v-1h-.5zm5.5 0h1l1 3 1-3h1l-1.5 5h-1L10 11zm-2.5 0a1.5 1.5 0 000 3 .5.5 0 010 1H6v1h1.5a1.5 1.5 0 000-3 .5.5 0 010-1H9v-1H7.5z" />
                </g>
                <g id="excel">
                    <path fill-rule="evenodd"
                        d="M3.5 0H3v2h1V1h7v4h4v10H4v-1H3v2h13V4.293l-.146-.147-4-4L11.707 0H3.5zm10.793 4L12 1.707V4h2.293zM0 3h10v10H0V3zm4 5L2 5h1.5L5 7.099 6.5 5H8L6 8l2 3H6.5L5 8.901 3.5 11H2l2-3z" />
                </g>
                <g id="xml">
                    <path fill-rule="evenodd"
                        d="M2 0h8.207l.147.146 3.5 3.5.146.147V9h-1V5H9V1H3v8H2V0zm8 4V1.207L12.793 4H10zm-4 7h1l1.5 3.654L10 11h1v5h-1v-2.404L9 16H8l-1-2.404V16H6v-5zm-.5 5L4 13.5 5.5 11h-1l-1 1.5-1-1.5h-1L3 13.5 1.5 16h1l1-1.5 1 1.5h1zm7.5-5v4h2v1h-3v-5h1z" />
                </g>
                <g id="json">
                    <path fill-rule="evenodd"
                        d="M2.5 0H2v9h1V1h6v4h4v4h1V3.793l-.146-.147-3.5-3.5L10.207 0H2.5zM10 1.207V4h2.793L10 1.207zM3 11v3.5a1.5 1.5 0 01-3 0v-.385h1v.385a.5.5 0 001 0V11h1zm2.5 0a1.5 1.5 0 000 3 .5.5 0 010 1H4v1h1.5a1.5 1.5 0 000-3 .5.5 0 010-1H7v-1H5.5zM8 12.5a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0v-2zm1.5-.5a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm3.429-1.257L12 11v5h1v-3.195l2.071 3.452L16 16v-5h-1v3.195l-2.071-3.452z" />
                </g>
                <g id="pdf">
                    <path fill-rule="evenodd"
                        d="M2 0h8.207l.147.146 3.5 3.5.146.147V9h-1V5H9V1H3v8H2V0zm8 4V1.207L12.793 4H10zm-7.5 7H2v5h1v-1a2 2 0 100-4h-.5zM4 13a1 1 0 01-1 1v-2a1 1 0 011 1zm6.5-2H10v5h1v-2h2v-1h-2v-1h2v-1h-2.5zM6 11h1.5A1.5 1.5 0 019 12.5v2A1.5 1.5 0 017.5 16H6v-5zm1 1v3h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H7z" />
                </g>
                <g id="word">
                    <path fill-rule="evenodd"
                        d="M3.5 0H3v2h1V1h7v4h4v10H4v-1H3v2h13V4.293l-.146-.147-4-4L11.707 0H3.5zm10.793 4L12 1.707V4h2.293zM0 3h10v10H0V3zm2.5 8l-1-6H3l.5 4.5 1-3.5h1l1 3.5L7 5h1.5l-1 6H6L5 8l-1 3H2.5z" />
                </g>
                <g id="image">
                    <path fill-rule="evenodd"
                        d="M1 1h14v11.293l-2.646-2.647L12 9.293l-.354.353L10 11.293 5.354 6.646 5 6.293l-.354.353L1 10.293V1zm0 10.707V15h14v-1.293l-3-3-1.646 1.647-.354.353-.354-.353L5 7.707l-4 4zm15 1.794V16H0V0h16V13.501zM11 6a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z" />
                </g>
    
            </defs>
        </svg>
    </pl-iconset>
    <pl-iconset iconset="pl-grid-icons">
        <svg>
            <defs>
                <g id="resizer">
                    <path
                        d="M13 4.25C13 4.66421 12.6642 5 12.25 5C11.8358 5 11.5 4.66421 11.5 4.25C11.5 3.83579 11.8358 3.5 12.25 3.5C12.6642 3.5 13 3.83579 13 4.25ZM12.25 9C12.6642 9 13 8.66421 13 8.25C13 7.83579 12.6642 7.5 12.25 7.5C11.8358 7.5 11.5 7.83579 11.5 8.25C11.5 8.66421 11.8358 9 12.25 9ZM12.25 13C12.6642 13 13 12.6642 13 12.25C13 11.8358 12.6642 11.5 12.25 11.5C11.8358 11.5 11.5 11.8358 11.5 12.25C11.5 12.6642 11.8358 13 12.25 13ZM8.25 13C8.66421 13 9 12.6642 9 12.25C9 11.8358 8.66421 11.5 8.25 11.5C7.83579 11.5 7.5 11.8358 7.5 12.25C7.5 12.6642 7.83579 13 8.25 13ZM9 8.25C9 8.66421 8.66421 9 8.25 9C7.83579 9 7.5 8.66421 7.5 8.25C7.5 7.83579 7.83579 7.5 8.25 7.5C8.66421 7.5 9 7.83579 9 8.25ZM4.25 13C4.66421 13 5 12.6642 5 12.25C5 11.8358 4.66421 11.5 4.25 11.5C3.83579 11.5 3.5 11.8358 3.5 12.25C3.5 12.6642 3.83579 13 4.25 13Z" />
                </g>
                <g id="sort">
                    <path fill-rule="evenodd" d="M4 7l4-6 4 6H4zm0 2l4 6 4-6H4z" />
                </g>
                <g id="sort-asc">
                    <path d="M8 1L4 7h8L8 1z" />
                </g>
                <g id="sort-desc">
                    <path fill="#464B52" d="M8 15L4 9h8l-4 6z" />
                </g>
                <g id="filter">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.75 3C0.335786 3 0 3.33579 0 3.75C0 4.16421 0.335786 4.5 0.75 4.5H15.25C15.6642 4.5 16 4.16421 16 3.75C16 3.33579 15.6642 3 15.25 3H0.75ZM3 7.75C3 7.33579 3.33579 7 3.75 7H12.25C12.6642 7 13 7.33579 13 7.75C13 8.16421 12.6642 8.5 12.25 8.5H3.75C3.33579 8.5 3 8.16421 3 7.75ZM6 11.75C6 11.3358 6.33579 11 6.75 11H9.25C9.66421 11 10 11.3358 10 11.75C10 12.1642 9.66421 12.5 9.25 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75Z" />
                </g>
            </defs>
        </svg>
    </pl-iconset>`

template.stamp({ root: document.head });
