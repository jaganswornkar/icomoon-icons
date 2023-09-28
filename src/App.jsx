import { useRef, useState } from "react";
import "./App.css";
import { iconList } from "./icon-list";

function App() {
    const [value, setValue] = useState("");
    const [data, setData] = useState(iconList);
    const ref = useRef();
    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);
        if (!val) {
            setData(iconList);
        } else {
            let fdata = iconList.filter((item) => item.name.includes(value) || item.content.includes(value));
            setData(fdata);
        }
        window.scrollTo(0,0)
    };
    const handleClick = (item) => {
        navigator.clipboard.writeText(item.name);
    };
    return (
        <div className="App">
            <h1>Icomoon icon set</h1>
            <div className="container search-cont">
                <input
                    className="search-input"
                    type="search"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search icon - ex: icon-bank or e902"
                />
                <i className="icon-search search-icon"></i>
                <div className="setup_link">
                    <a href="#setup">Setup & Configuration</a>
                </div>
            </div>
            <div className="container icon-cont">
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <div onClick={() => handleClick(item)} title="Click To Copy" className="icon-item">
                                <i className={item.name}></i>
                                <label htmlFor={item.name}>
                                    <span ref={ref}>{item.name}</span>:<span className="bold"> {item.content}</span>
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
            <div id="setup" style={{ width: "100%" }}>
                <h1 style={{ textAlign: "center" }}>Setup & Configuration</h1>
                <h3>How to use it?</h3>
                <p>Just finish this configuration and you're ready to use these icons. you just need to use those classnames to any of html tag, for conventioin use {"<i></i>"} tag.</p>
                <p>Ex: <span className="filename">{`<i className="icon-star"></i>`}</span>  <i className="icon-star"></i> </p>
                <div className="container search-cont">
                    <p style={{ display: "flex" }}>
                        Download all free fonts :{" "}
                        <div className="setup_link">
                            <a download href="/fonts.zip">Click To Download</a>
                        </div>
                    </p>
                    <p>
                        Now create a <span className="filename">/fonts</span> directory and put all those font files into that.{" "}
                    </p>
                    <p>Now it's time to write configuration in your global css file. Copy all below css into your css file.</p>
                    <p className="note">Note: Make suret to change add proper file path in url of @font-face{"url('PROPER_FILE_PATH_HERE')"}</p>
                    <p className="info-note">
                        Info Note: here we are defining icon class name with <span className="filename">.icon-ICON_NAME</span> so that you can
                        directly access those icons by just using these classes. and at last we are setting few adjustments like font-size and color
                        to those icons globaly.{" "}
                    </p>
                    <code>
                        <pre className="scroller">
                            {`
@font-face {
    font-family: "icomoon";
    src: url("./assets/fonts/icomoon.eot?vhoh5d");
    src: url("./assets/fonts/icomoon.eot?vhoh5d#iefix") format("embedded-opentype"), url("./assets/fonts/icomoon.ttf?vhoh5d") format("truetype"),
        url("./assets/fonts/icomoon.woff?vhoh5d") format("woff"), url("./assets/fonts/icomoon.svg?vhoh5d#icomoon") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

.icon-active:before {
    content: "\e900";
}
.icon-attach:before {
    content: "\e901";
}
.icon-attachments-two:before {
    content: "\e94c";
}
.icon-bank:before {
    content: "\e902";
}
.icon-bell:before {
    content: "\e903";
}
.icon-building:before {
    content: "\e95d";
}
.icon-calder-left:before {
    content: "\e904";
}
.icon-calder-righ1:before {
    content: "\e905";
}
.icon-calendar:before {
    content: "\e912";
}
.icon-calender:before {
    content: "\e906";
}
.icon-card:before {
    content: "\e949";
}
.icon-cart:before {
    content: "\e907";
}
.icon-chat:before {
    content: "\e908";
}
.icon-check:before {
    content: "\e94a";
}
.icon-check-list:before {
    content: "\e95e";
}
.icon-cir-cross:before {
    content: "\e909";
}
.icon-cir-plus:before {
    content: "\e90a";
}
.icon-circle:before {
    content: "\e95f";
}
.icon-circle-per:before {
    content: "\e94b";
}
.icon-circle-tick:before {
    content: "\e960";
}
.icon-clock:before {
    content: "\e90b";
}
.icon-communications-two:before {
    content: "\e961";
}
.icon-comparison:before {
    content: "\e90c";
}
.icon-coupon:before {
    content: "\e90d";
}
.icon-cross:before {
    content: "\e90e";
}
.icon-delete:before {
    content: "\e90f";
}
.icon-disputes:before {
    content: "\e910";
}
.icon-dollar-s:before {
    content: "\e94d";
}
.icon-doller-letter:before {
    content: "\e962";
}
.icon-doller-three:before {
    content: "\e963";
}
.icon-down-arrow:before {
    content: "\e911";
}
.icon-dye:before {
    content: "\e913";
}
.icon-edit:before {
    content: "\e958";
}
.icon-edit-two:before {
    content: "\e964";
}
.icon-envelope:before {
    content: "\e914";
}
.icon-error:before {
    content: "\e915";
}
.icon-excel:before {
    content: "\e965";
}
.icon-exclamation:before {
    content: "\e916";
}
.icon-facebook:before {
    content: "\e917";
}
.icon-filled-star:before {
    content: "\e966";
}
.icon-filter:before {
    content: "\e918";
}
.icon-filter-results:before {
    content: "\e919";
}
.icon-fleg:before {
    content: "\e967";
}
.icon-fliter-list:before {
    content: "\e91a";
}
.icon-forward-two:before {
    content: "\e968";
}
.icon-gain:before {
    content: "\e969";
}
.icon-gird:before {
    content: "\e91b";
}
.icon-graph:before {
    content: "\e94e";
}
.icon-graph-two:before {
    content: "\e96a";
}
.icon-group:before {
    content: "\e94f";
}
.icon-haircut:before {
    content: "\e91c";
}
.icon-hide:before {
    content: "\e91d";
}
.icon-history:before {
    content: "\e91e";
}
.icon-ight-tick-two:before {
    content: "\e96b";
}
.icon-info:before {
    content: "\e91f";
}
.icon-inventry:before {
    content: "\e920";
}
.icon-layout:before {
    content: "\e950";
}
.icon-left-arrow:before {
    content: "\e921";
}
.icon-letter:before {
    content: "\e96c";
}
.icon-link:before {
    content: "\e922";
}
.icon-link-two:before {
    content: "\e96d";
}
.icon-list:before {
    content: "\e923";
}
.icon-logout:before {
    content: "\e924";
}
.icon-lost:before {
    content: "\e96e";
}
.icon-minus:before {
    content: "\e925";
}
.icon-mobile:before {
    content: "\e96f";
}
.icon-money:before {
    content: "\e926";
}
.icon-money-bag:before {
    content: "\e927";
}
.icon-note:before {
    content: "\e928";
}
.icon-note-ped:before {
    content: "\e970";
}
.icon-noted:before {
    content: "\e951";
}
.icon-out-ward:before {
    content: "\e952";
}
.icon-package:before {
    content: "\e929";
}
.icon-payments:before {
    content: "\e92a";
}
.icon-payouts:before {
    content: "\e92b";
}
.icon-pc:before {
    content: "\e953";
}
.icon-pdf:before {
    content: "\e971";
}
.icon-percentage:before {
    content: "\e954";
}
.icon-picture:before {
    content: "\e92c";
}
.icon-printer:before {
    content: "\e92d";
}
.icon-product-three:before {
    content: "\e95b";
}
.icon-product-two:before {
    content: "\e972";
}
.icon-profile:before {
    content: "\e959";
}
.icon-question:before {
    content: "\e92e";
}
.icon-radio-set:before {
    content: "\e973";
}
.icon-refresh:before {
    content: "\e974";
}
.icon-refresh-two:before {
    content: "\e95c";
}
.icon-reset:before {
    content: "\e92f";
}
.icon-reward:before {
    content: "\e930";
}
.icon-right-arrow:before {
    content: "\e931";
}
.icon-right-arrow1:before {
    content: "\e932";
}
.icon-schedule:before {
    content: "\e933";
}
.icon-search:before {
    content: "\e934";
}
.icon-seen:before {
    content: "\e935";
}
.icon-send:before {
    content: "\e936";
}
.icon-service:before {
    content: "\e937";
}
.icon-setting:before {
    content: "\e95a";
}
.icon-settings:before {
    content: "\e938";
}
.icon-shampoo:before {
    content: "\e939";
}
.icon-share:before {
    content: "\e93a";
}
.icon-smiling:before {
    content: "\e93b";
}
.icon-sms:before {
    content: "\e93c";
}
.icon-star:before {
    content: "\e975";
}
.icon-status:before {
    content: "\e93d";
}
.icon-status1:before {
    content: "\e93e";
}
.icon-stock:before {
    content: "\e93f";
}
.icon-support:before {
    content: "\e940";
}
.icon-tax:before {
    content: "\e941";
}
.icon-team:before {
    content: "\e942";
}
.icon-team-two:before {
    content: "\e976";
}
.icon-thumb-down:before {
    content: "\e955";
}
.icon-thumb-up:before {
    content: "\e956";
}
.icon-tick:before {
    content: "\e943";
}
.icon-ticket:before {
    content: "\e977";
}
.icon-transection:before {
    content: "\e944";
}
.icon-txt-underline:before {
    content: "\e945";
}
.icon-up-arrow:before {
    content: "\e946";
}
.icon-uploading:before {
    content: "\e947";
}
.icon-user:before {
    content: "\e948";
}
.icon-user-arrow:before {
    content: "\e978";
}
.icon-visit:before {
    content: "\e979";
}
.icon-wallate:before {
    content: "\e957";
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
                          
                        `}
                        </pre>
                    </code>
                </div>
            </div>
        </div>
    );
}

export default App;
