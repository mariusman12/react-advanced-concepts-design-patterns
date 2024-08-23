import styled from "styled-components";
import {useNavData,useNavApi} from "../context/nav-controller";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
    const {toggle} = useNavApi()
    const {collapse} = useNavData()
    return <ToggleButton onClick={toggle}>{collapse ? '>':'<'}</ToggleButton>;
};

export default Button;
