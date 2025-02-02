import styled from "styled-components";


export const UserStyled = styled.div`
    margin: 61px auto 80px auto;
    // max-width: 280px;
    width: 100%;

    @media screen and (min-width:768px) {
        margin: 88px auto 100px auto;
    }

    @media screen and (min-width:1280px) {
        margin: 58px auto 40px auto;
        display: flex;
    }

    .user-card-info{
        // margin-left: 20px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.35;
        color: ${({ theme }) => theme.colors.black};

        @media screen and (min-width:768px) {
            padding-left: 32px;
            font-size: 28px;
        }
        @media screen and (min-width:1280px) {
            padding-left: 17px;

        }
    }

    .user-card{
        margin-bottom: 47px;
        padding-left: 20px;
        padding-right: 20px;
        @media screen and (min-width:768px){
            margin-bottom: 20px;
            margin-right: 32px;
            padding-right: 0;
            padding-left: 0;
        }

        @media screen and (min-width:1280px) {
            margin-bottom: 0;
        }
    }

    .user-info{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px 16px 20px 16px;
        margin-top: 18px;
        // height: 537px;
        background-color: ${({ theme }) => theme.colors.background};
        box-shadow: 7px 4px 14px ${({ theme }) => theme.colors.black};
        border-radius: 20px;

        @media screen and (min-width:768px){
            align-items: stretch;
            margin: 40px 0px 0px 0;
            padding: 24px 40px 24px 32px;
            border-radius: 0px 40px 40px 0px;
        }

        @media screen and (min-width:1280px) {
            margin: 24px 0 0 0;
            padding: 20px 16px 18px 16px;
        }
    }

    .loqout{
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.38;
        cursor: pointer;
        color: rgba(17, 17, 17, 0.6);

        @media screen and (min-width:768px) {
            margin-top: -25px;
        }

        @media screen and (min-width:1280px) {
            margin-top: 0;
        }

        p{
            margin-left: 8px;
            color:${({ theme }) => theme.colors.gray};
        }
    }

    .pets-conteiner{
        width: 100%;
        padding: 0 32px 0 32px;

        @media screen and (min-width:1280px) {
            padding: 0;
        }

    }

`


