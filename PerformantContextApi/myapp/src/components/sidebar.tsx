import styled from "styled-components";
import Button from "./button";
import { useNavApi, useNavData} from "../context/nav-controller";

const SidebarDiv = styled.div<{ collapsed?: boolean }>`
  width: ${(props) => (props.collapsed ? "60px" : "200px")};
  transition: width 0.3s;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Sidebar = () => {

    const {collapse} = useNavData()

    return (
        <SidebarDiv collapsed={collapse}>
            <Button  />
            <div>Sidebar Content</div>
        </SidebarDiv>
    );
};

export default Sidebar;
