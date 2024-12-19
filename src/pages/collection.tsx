import cartItems from "../app/providers/mockData";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../widgets/Modal";
import CloseButton from "@assets/icon/CloseButton.svg?react";
type data = {
    id: string;
    title: string;
    price: string;
    img?: undefined | string;
    singer: string;
    amout?: number;
};
const Collection = () => {
    const mockData = cartItems;
    const mockDataLength = mockData.length;
    console.log(mockData);
    console.log(mockData);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [selectedData, setSelectedData] = useState<data>();
    return (
        <div>
            <div>낭만 모음집</div>
            {mockDataLength === 0 ? (
                <div>낭만이 부족한 누구누구 입니다.</div>
            ) : (
                <NagManDataDiv>
                    {mockData.map((data) => {
                        return (
                            <div>
                                <span
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "278px",
                                        width: "215px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        alignContent: "center",
                                        marginRight: "30px",
                                    }}
                                    onClick={(e) => {
                                        console.log("클릭됨");
                                        setIsModalOpen(true);
                                        setSelectedData(data);
                                        e.stopPropagation();
                                    }}
                                    key={data.id}
                                >
                                    <img
                                        src={data.img}
                                        width="200px"
                                        height="200px"
                                    ></img>
                                    <div>{data.title}</div>
                                    <div>{data.price}</div>
                                </span>
                                {data?.img ? (
                                    <Modal
                                        isOpen={isModalOpen}
                                        onClose={() => setIsModalOpen(false)}
                                        width={790}
                                        height={817.17}
                                    >
                                        <CloseButtonDiv
                                            onClick={(e) => {
                                                setIsModalOpen(false);
                                                e.stopPropagation();
                                            }}
                                        >
                                            <CloseButton />
                                        </CloseButtonDiv>
                                        <div>
                                            <ImgStyle
                                                src={data?.img}
                                                style={{
                                                    width: "580px",
                                                    height: "279px",
                                                }}
                                            ></ImgStyle>
                                            <TitleStyle>
                                                {data?.title}
                                            </TitleStyle>
                                            <div
                                                style={{
                                                    width: "580px",
                                                    height: "194px",
                                                }}
                                            >
                                                <div>미션후기</div>
                                                <PriceStyle>
                                                    {data?.price}
                                                </PriceStyle>
                                            </div>
                                        </div>
                                    </Modal>
                                ) : (
                                    <Modal
                                        isOpen={isModalOpen}
                                        onClose={() => setIsModalOpen(false)}
                                        width={790}
                                        height={528.21}
                                    >
                                        <CloseButtonDiv>
                                            <CloseButton />
                                        </CloseButtonDiv>
                                        <div>
                                            <TitleStyle>
                                                {data?.title}
                                            </TitleStyle>
                                            <div
                                                style={{
                                                    width: "580px",
                                                    height: "194px",
                                                }}
                                            >
                                                <div>미션후기</div>
                                                <PriceStyle>
                                                    {data?.price}
                                                </PriceStyle>
                                            </div>
                                        </div>
                                    </Modal>
                                )}
                            </div>
                        );
                    })}
                </NagManDataDiv>
            )}
        </div>
    );
};
export default Collection;

const NagManDataDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    justify-content: center;
`;
const TitleStyle = styled.div.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    width: 580px;
    height: 104px;
    align-content: center;
`;

const PriceStyle = styled.div.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    width: 580px;
    height: 155px;
    align-content: center;
`;

const CloseButtonDiv = styled.div`
    width: 750px;
    height: 44px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`;
