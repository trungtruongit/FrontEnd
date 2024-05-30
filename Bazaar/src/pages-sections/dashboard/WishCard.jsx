import NextImage from "next/image";
import {Box, Card} from "@mui/material";
import {H1, H2, H5, Paragraph} from "components/Typography";
import {currency} from "lib";
import {useGetDate} from "../../hooks/useGetDate";
import {useEffect, useState} from "react";
import axios from "axios";
import {SpinnerLoading} from "../../utils/__api__/spiner"
const WishCard = () => {
    const {startDate, endDate} = useGetDate();
    const [start, setStart] = useState();
    const [name, setName] = useState();
    useEffect(() => {
        const fetchDataName = async () => {
            try {
                const resName = await axios.post(`https://four-gems-api-c21adc436e90.herokuapp.com/user/get-info-by-token?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBVERTdG9yZSIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoibWFuYWdlcnRlc3QiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJUZXN0IE1hbmFnZXIiLCJhZGRyZXNzIjoiMjAyIE1hcGxlIFN0IiwiaWQiOjcsImNvdXRlckFkZHJlc3MiOiI0NTYgWGEgTG8gSGEgTm9pIiwicGhvbmVOdW1iZXIiOiI1NjctODkwLTEyMzQiLCJpYXQiOjE3MTcwNjE0ODcsImV4cCI6MTcxNzA5MTQ4N30.TPm9_RM7ZeuGmc6zV_OCndFdKkBBM6zZPz0AcUkhLLE`,{}, {
                    headers: {
                        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBVERTdG9yZSIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoibWFuYWdlcnRlc3QiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJUZXN0IE1hbmFnZXIiLCJhZGRyZXNzIjoiMjAyIE1hcGxlIFN0IiwiaWQiOjcsImNvdXRlckFkZHJlc3MiOiI0NTYgWGEgTG8gSGEgTm9pIiwicGhvbmVOdW1iZXIiOiI1NjctODkwLTEyMzQiLCJpYXQiOjE3MTcwNjE0ODcsImV4cCI6MTcxNzA5MTQ4N30.TPm9_RM7ZeuGmc6zV_OCndFdKkBBM6zZPz0AcUkhLLE' //the token is a variable which holds the token
                    }
                });
                console.log(resName.data)
                setName(resName.data.data.fullName);
            } catch (e) {
                console.log(e)
            }
        }
        fetchDataName();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                //http://localhost:8080/order/get-money-by-date?countId=1&startDate=2021-05-29&endDate=2024-05-29
                const res = await axios.get(`https://four-gems-api-c21adc436e90.herokuapp.com/order/get-money-by-date?countId=1&startDate=2021-05-25&endDate=${endDate}`, {
                    headers: {
                        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBVERTdG9yZSIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoibWFuYWdlcnRlc3QiLCJyb2xlIjoibWFuYWdlciIsIm5hbWUiOiJUZXN0IE1hbmFnZXIiLCJhZGRyZXNzIjoiMjAyIE1hcGxlIFN0IiwiaWQiOjcsImNvdXRlckFkZHJlc3MiOiI0NTYgWGEgTG8gSGEgTm9pIiwicGhvbmVOdW1iZXIiOiI1NjctODkwLTEyMzQiLCJpYXQiOjE3MTcwNTk1MzgsImV4cCI6MTcxNzA4OTUzOH0.jEMMAam_cZMp0ZwFDzvyy_-ReVWtNemRSNDbpqaq0Kc' //the token is a variable which holds the token
                    }
                });
                // console.log(res.data)
                setStart(res.data.data);
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, []);
    console.log(name)
    return (
        <Card
            sx={{
                p: 3,
                height: "100%",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box sx={{
                mb: 6,
            }}>
                <H2 color="info.main" mb={0.5}>
                    Good Morning, {name}!
                </H2>
                <H5 color="grey.600">
                    Here’s what happening with your store today!
                </H5>

                {/*<H3 mt={3}>15,350.25</H3>*/}
                {/*<Paragraph color="grey.600">Today’s Visit</Paragraph>*/}

                {/*<H1 mt={1}>{currency(start)}</H1>*/}
                <H1 mt={1}>
                    {isNaN(start) ? <SpinnerLoading /> : currency(start)}
                </H1>
                <H5 color="grey.600">Today’s total sales</H5>
            </Box>
            <Box
                sx={{
                    right: 24,
                    bottom: 0,
                    position: "absolute",
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
            >
                <NextImage
                    src="/assets/images/illustrations/dashboard/welcome.svg"
                    width={220}
                    height={180}
                    alt="Welcome"

                />
            </Box>
        </Card>
    );
};

export default WishCard;
