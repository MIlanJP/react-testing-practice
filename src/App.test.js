import React from "react";
import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup=(props={},state=null)=>{
return shallow(<App {...props}/>)
}

const findByAttribute=(wrapper,testId)=>{
return wrapper.find(`[data-test='${testId}']`)
}


test("renders without error", () => {
  const wrapper=setup()
  const appComponent=findByAttribute(wrapper,'appComponent')
  expect(appComponent.length).toBe(1)
});

test("renders increment button", () => {
    const wrapper=setup()
    const appComponent=findByAttribute(wrapper,'appComponent')
    expect(appComponent.length).toBe(1)
});
test("renders counters display", () => {
    const wrapper=setup()
  const button=findByAttribute(wrapper,'incrementButton')

    expect(button.length).toBe(1)
});
test("counter starts at 0", () => {
    const wrapper=setup()
  const counterDisplay=findByAttribute(wrapper,'counterDisplay')
    expect(counterDisplay.length).toBe(1)
});
test("renders learn react link", () => {
    const wrapper=shallow(<App/>)
    const appComponent=wrapper.find("[data-test='appComponent']");
    expect(appComponent.length).toBe(1)
});
