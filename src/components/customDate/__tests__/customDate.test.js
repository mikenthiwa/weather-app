import React, { Component } from 'react';
import CustomDate from '../index';

describe('Custom Date', () => {
  let component;

  const props = {
    checkWeather: jest.fn(),
  };

  beforeAll(() => {
    component = mount(
      <CustomDate {...props} />
    );
  });



  it('should render customDatePicker', function () {
    expect(component.find('input[type="text"]').length).toEqual(1);
  });
  it('should test for onChange in react react date picker', function () {
    component.instance().instance = jest.fn();
    const event = {
      target: {
        value: '2020/2/1'
      }
    };
    component.find('input[type="text"]').simulate('change', event);
    expect(component.instance().state.date).toEqual(new Date('2020/2/1'));
  });

  it('should call onClick method when check weather button is clicked', function () {
    component.find('button').simulate('click');
    expect(component.instance().props.checkWeather).toHaveBeenCalledTimes(1);
    component.instance().state.date = '';
  });
  it('should set the state for date to empty of date is not selected', function () {
    component.find('button').simulate('click');
    expect(component.instance().state.date).toEqual('');
  });
});
