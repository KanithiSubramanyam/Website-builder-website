import React from "react";
import Search from "./i.png";
import Tick from "./tick.png";
import Tick2 from "./tick2.png";
import Info from "./info.png";
import Down from "./down.png";
import Content from "./content.png";
import Icon from "./icons1.png";
import Icon1 from "./icons2.png";
import Stars1 from "./stars1.png";
import Stars2 from "./stars2.png";
import Stars3 from "./stars3.png";
import Stars4 from "./stars4.png";

const WebsiteBuilder = () => {
  const data = [
    {
      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      ratingText: "Exceptional",
      icon: Icon,
      value: "Best Choice",
      className:"Best",
      Stars : Stars1
    },
    {
      title: "SiteCraft 68-Inch Ultimate Web Design Studio ",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      ratingText: "Excellent",
      icon: Icon1,
      value: "Best Value",
      className:"Best",
      Stars : Stars2

    },
    {
        title: "WixPro 72-Inch Responsive Website Builder",
        description:
          "Comprehensive Digital Platform Creation Tool Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights:
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        rating: "9.3",
        ratingText: "Exceptional",
        icon: '',
        value: "",
      className:"",
      Stars : Stars3
      },
    
    
  ];

  return (
    <>
      <div className="Container">
        <div className="TaskBar">
          <ul className="List">
            <div className="Input">
              <img src={Search} alt="Search" />
              <input type="text" />
            </div>
            <li>Categories</li>
            <li>Website Builders</li>
            <li>Today's deals</li>
          </ul>
        </div>

        <div className="mainSection">
          <div className="MainList">
            <div className="Heading">
              <p>Best Website builders in the US</p>
            </div>
            <div className="Line"></div>
            <div className="Info">
              <div className="Info-Left">
                <img src={Tick} alt="Tick" />
                <p>Last Updated - Feburary 22, 2020</p>
                <img src={Info} alt="Info" />
                <p>Adverting Disclosure</p>
              </div>
              <div className="Info-Right">
                <p>Top Relevant</p>
                <img src={Down} alt="Down" />
              </div>
            </div>
            <div className="Line"></div>
            <div className="QuickLinks">
              <ul>
                <li>Tools</li>
                <li>AWS Builder</li>
                <li>Start Build</li>
                <li>Build Snippets</li>
                <li>Tooling</li>
                <li>BlueHosting</li>
              </ul>
            </div>
            <div className="Breadcums">
              <ul>
                <li>Home</li>
                <li>></li>
                <li>Hosting for all</li>
                <li>></li>
                <li>Hosting</li>
                <li>></li>
                <li>Hosting6</li>
                <li>></li>
                <li>Hosting5</li>
              </ul>
            </div>
            <div className="ContentBox">
              {data.map((item, index) => (
                <div className="MainContent" key={index}>
                  <div className={item.className}>
                    {" "}
                    <img src={item.icon} alt=""/>{item.value}
                  </div>
                  <div className="DetailsContent">
                    <div className="Details1">
                      <img src={Content} alt="Content" />
                    </div>
                    <div className="Details2">
                      <p>
                        {" "}
                        <strong>{item.title}</strong> - {item.description}
                      </p>
                      <strong>Main highlights</strong>
                      <ul>
                        <li>{item.highlights}</li>
                      </ul>
                      <div className="ShowMore">
                        <a href="#">Show more</a>
                        <img src={Down} alt="Down" />
                      </div>
                    </div>
                    <div className="Details3">
                      <p>
                        <strong>{item.rating}</strong>
                      </p>
                      <p>{item.ratingText}</p>
                      <p><img src={item.Stars}  alt=""/></p>
                      <button>View</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="MainContent" >
              <div className="Best">
                    {" "}
                    <img src={Icon} alt=""/>Best Value
                  </div>
                  <div className="DetailsContent">
                    <div className="Details1">
                      <img src={Content} alt="Content" />
                    </div>
                    <div className="Details2">
                      <p>
                        {" "}
                        <strong>CDK Resposive Builder:</strong> -  An extensive library of widgets and apps, and detailed step-by-step guides
                      </p>
                      <strong>Main highlights</strong>
                      <div className="Main-highlights">
                      <ul>
                        <li><span>9.9</span> Building Responsive</li>
                        <li><span>8.9</span> Cool</li>
                        <li><span>8.9</span> Docs</li>
                      </ul>
                      </div>
                      
                      <ul >
                        <p>Why we love it</p>
                        <li><pre><img src={Tick2} alt=""/> Documentation</pre></li>
                        <li><pre><img src={Tick2} alt=""/> Easy Use</pre></li>
                        <li><pre><img src={Tick2} alt=""/> Out of Box</pre></li>
                      </ul>
                      <div className="ShowMore">
                        <a href="">Show more</a>
                        <img src={Down} alt="Down" />
                      </div>
                    </div>
                    <div className="Details3">
                      <p>
                        <strong>9.1</strong>
                      </p>
                      <p>Very Good</p>
                      <p><img src={Stars4} alt=''/></p>
                      <button style={{ position: 'relative', top: '220px' }}>View</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="Content">
            <p>Related deals you might like for</p>
            <div className="SubContent">
              <div className="DealsContainer">
                <div className="Deals">
                  <div className="DealsImage">
                    <img src={Content} alt="Content" />
                  </div>
                  <div className="DealsList">
                    <p>20% off</p>
                    <p>Limited time</p>
                  </div>
                  <div className="DealsContent">
                    <strong>Webbuilder1</strong>
                    <p>Computer Modern classic with wix support</p>
                    <span>
                      $39.96{" "}
                      <small>
                        $49.96 <span>(20% Off)</span>
                      </small>
                    </span>
                  </div>

                  <div className="DealsButton">
                    <button>View Deal</button>
                  </div>
                </div>
              </div>
              <div className="DealsContainer">
                <div className="Deals">
                  <div className="DealsImage">
                    <img src={Content} alt="Content" />
                  </div>
                  <div className="DealsList">
                    <p>20% off</p>
                    <p>Limited time</p>
                  </div>
                  <div className="DealsContent">
                    <strong>Webbuilder1</strong>
                    <p>Computer Modern classic with wix support</p>
                    <span>
                      $39.96{" "}
                      <small>
                        $49.96 <span>(20% Off)</span>
                      </small>
                    </span>
                  </div>

                  <div className="DealsButton">
                    <button>View Deal</button>
                  </div>
                </div>
              </div>
              <div className="DealsContainer">
                <div className="Deals">
                  <div className="DealsImage">
                    <img src={Content} alt="Content" />
                  </div>
                  <div className="DealsList">
                    <p>20% off</p>
                    <p>Limited time</p>
                  </div>
                  <div className="DealsContent">
                    <strong>Webbuilder1</strong>
                    <p>Computer Modern classic with wix support</p>
                    <span>
                      $39.96{" "}
                      <small>
                        $49.96 <span>(20% Off)</span>
                      </small>
                    </span>
                  </div>

                  <div className="DealsButton">
                    <button>View Deal</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="Signup">
              <p>Sign up and get exclusive special deals</p>
              <button>Sign Up</button>
            </div>
          </div>
        </div>

        <div className="Footer">
          <div className="FooterSection">
            <div className="FooterList">
              <ul>
                <p>CATEGORIES</p>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic-Automation</li>
              </ul>
            </div>
            <div className="FooterList">
              <ul>
                <p>CONTACT</p>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Categories</li>
                <li>About</li>
              </ul>
            </div>
            <div className="FooterList">
              <span>United States <img src={Down} alt="Down" /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteBuilder;
