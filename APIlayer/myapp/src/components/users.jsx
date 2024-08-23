import React,{ useState } from "react"
import { fetchUsers } from "../api/userApi"
import styled from 'styled-components'
import { useEffect } from "react"
import { withAsync } from "../helpers/with-async"
import { ApiStatus, ERROR, IDLE, PENDING, SUCCESS } from "../constants/api-status"
import { useApiStatus } from "../api/hooks/useApiStatus"




const useFetchUsers = () =>{
    const [users,setUsers] = useState([])

    const {
        status: fetchUsersStatus,
        setStatus : setFetchUsersStatus,
        isIdle: isFetchUsersStatusIdle,
        isPending: isFetchUsersStatusPending,
        isError:isFetchUsersStatusError,
        isSuccess: isFetchUsersStatusSuccess
    } = useApiStatus(ApiStatus.IDLE)

    const initFetchUsers = async () =>{
        setFetchUsersStatus(PENDING)
        const {response,error} = await withAsync(() => fetchUsers())
        if (error){
            setFetchUsersStatus(ERROR)
        }else if(response){
            setFetchUsersStatus(SUCCESS)
            setUsers(response.data)

        }
    }

    return {
        users,fetchUsersStatus,
        setFetchUsersStatus,
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusError,
        isFetchUsersStatusSuccess,
        initFetchUsers
    }
}



const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

function Users() {
    const { users, fetchUsersStatus, initFetchUsers } = useFetchUsers();
  
    useEffect(() => {
      initFetchUsers();
    }, []);
  
    return (
      <Container>
        <FetchButton onClick={initFetchUsers}>{fetchUsersStatus === ApiStatus.PENDING ? 'Loading' : 'Fetch Users'}</FetchButton>

        <FlexContainer>
          <ContentContainer>
            {users
              ? users.map((user, index) => (
                  <React.Fragment key={index}>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                  </React.Fragment>
                ))
              : null}
          </ContentContainer>
        </FlexContainer>

      </Container>
    );
  }
  export default Users;