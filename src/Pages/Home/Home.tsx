import React, { ReactNode } from "react";
import styled, { StyledProps } from "styled-components";

export interface homeProps extends StyledProps<any> {
  tip?: string;
}

const TipFun = (props: homeProps) => {
  const { tip } = props;
    return (
      <div>
        {tip}
      </div>
    );
};

const Home = () => {
    return (
      <div>
        HomeTitle
        <hr/>
        <input id="input_01" type="text" placeholder="please inpuut"/>
        <hr/>
        {TipFun({tip: 'aaaa'})}
      </div>
    );
};


export default Home;