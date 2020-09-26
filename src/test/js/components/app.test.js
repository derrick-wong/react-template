import React from "react";
import {shallow} from "enzyme";
import App from "../../../main/js/components/App.js";

describe("App", () => {

  it("App renders", () => {
    shallow(<App/>);
  });

  it("Verify App contents", () => {
    const app = shallow(<App/>);

    const appDiv = app.find("div");
    expect(appDiv).toBeTruthy();
    expect(appDiv.length).toEqual(1);

    const appH1 = app.find("h1");
    expect(appH1).toBeTruthy();
    expect(appH1.text()).toBe("ReactJS/Redux-Saga/Webpack/Babel/Express Template");
  });
});
