import {useRouter} from "next/router";
import {Search} from "@mui/icons-material";
import {Box, Button, styled, useMediaQuery} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Globe from "components/icons/Globe";
import Toggle from "components/icons/Toggle";
import AccountPopover from "./popovers/AccountPopover";
import {FlexBox, FlexRowCenter} from "components/flex-box";
import NotificationsPopover from "./popovers/NoficationPopover"; // custom styled components
import {H3} from "components/Typography";
import {useEffect, useState} from "react";
import axios from "axios";

const DashboardNavbarRoot = styled(AppBar)(({theme}) => ({
    zIndex: 11,
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#DD8EB8",
    boxShadow: theme.shadows[2],
    color: theme.palette.text.primary,
}));
const StyledToolBar = styled(Toolbar)(() => ({
    "@media (min-width: 0px)": {
        paddingLeft: 0,
        paddingRight: 0,
        minHeight: "auto",
    },
}));
const ToggleWrapper = styled(FlexRowCenter)(({theme}) => ({
    width: 40,
    height: 40,
    flexShrink: 0,
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: theme.palette.grey[100],
}));
const CustomButton = styled(Button)(({theme}) => ({
    minHeight: 40,
    flexShrink: 0,
    marginLeft: 16,
    padding: "0 20px",
    borderRadius: "8px",
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.down("xs")]: {
        display: "none",
    },
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
    width: 500,
    padding: "5px 10px",
    borderRadius: "50px",
    color: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
})); // ===================================================================

// ===================================================================
const DashboardNavbar = ({handleDrawerToggle}) => {
    const router = useRouter();
    const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
    const [name, setName] = useState();
    useEffect(() => {
        const fetchDataName = async () => {
            try {
                const resName = await axios.post(`https://four-gems-api-c21adc436e90.herokuapp.com/user/get-info-by-token?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBVERTdG9yZSIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoibWFuYWdlcnRlc3QiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJUZXN0IE1hbmFnZXIiLCJhZGRyZXNzIjoiMjAyIE1hcGxlIFN0IiwiaWQiOjcsImNvdXRlckFkZHJlc3MiOiI0NTYgWGEgTG8gSGEgTm9pIiwicGhvbmVOdW1iZXIiOiI1NjctODkwLTEyMzQiLCJpYXQiOjE3MTcwNjE0ODcsImV4cCI6MTcxNzA5MTQ4N30.TPm9_RM7ZeuGmc6zV_OCndFdKkBBM6zZPz0AcUkhLLE`, {}, {
                    headers: {
                        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBVERTdG9yZSIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoibWFuYWdlcnRlc3QiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJUZXN0IE1hbmFnZXIiLCJhZGRyZXNzIjoiMjAyIE1hcGxlIFN0IiwiaWQiOjcsImNvdXRlckFkZHJlc3MiOiI0NTYgWGEgTG8gSGEgTm9pIiwicGhvbmVOdW1iZXIiOiI1NjctODkwLTEyMzQiLCJpYXQiOjE3MTcwNjE0ODcsImV4cCI6MTcxNzA5MTQ4N30.TPm9_RM7ZeuGmc6zV_OCndFdKkBBM6zZPz0AcUkhLLE' //the token is a variable which holds the token
                    }
                });
                // console.log(resName.data)
                setName(resName.data.data.fullName);
            } catch (e) {
                console.log(e)
            }
        }
        fetchDataName();
    }, []);
    return (
        <DashboardNavbarRoot position="sticky">
            <Container maxWidth="xl">
                <StyledToolBar disableGutters>
                    {downLg && (
                        <ToggleWrapper onClick={handleDrawerToggle}>
                            <Toggle/>
                        </ToggleWrapper>
                    )}

                    {/* <CustomButton
            onClick={() => router.push("/")}
            startIcon={
              <Globe
                sx={{
                  color: "grey.900",
                }}
              />
            }
          >
            Browse Website
          </CustomButton> */}

                    <Box flexGrow={1} sx={{}}/>

                    <FlexBox alignItems="center" gap={4}>
                        <StyledInputBase
                            placeholder="Search anything..."
                            startAdornment={
                                <Search
                                    sx={{
                                        color: "grey.500",
                                        mr: 1,
                                    }}
                                />
                            }
                        />
                        <AccountPopover/>
                        <H3>Hello {name}</H3>
                        <NotificationsPopover/>
                    </FlexBox>
                </StyledToolBar>
            </Container>
        </DashboardNavbarRoot>
    );
};

export default DashboardNavbar;