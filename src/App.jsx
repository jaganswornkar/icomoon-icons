import { useState } from "react";
import "./App.css";
import { iconList } from "./icon-list";
function App() {
    const [value, setValue] = useState("");
    const [data, setData] = useState(iconList);
    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);
        if (!val) {
            setData(iconList);
        } else {
            let fdata = iconList.filter((item) => item.name.includes(value) || item.content.includes(value));
            setData(fdata);
        }
    };
    return (
        <div className="App">
            <h1>Icomoon icon set</h1>
            <div className="container">
                <input
                    className="search-cont"
                    type="search"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search icon - ex: icon-bank or e902"
                />
            </div>
            <div className="container icon-cont">
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <div className="icon-item">
                                <i className={item.name}></i>
                                <label htmlFor={item.name}>
                                    {item.name}: {item.content}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
