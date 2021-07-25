import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;
    

    .nav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .cart{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        height: 100vh;
        width: 100%;
        background: #836FFF;
        display: flex;
        justify-content: space-between;

        .product-content{
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
            background: #836FFF;
        }
    }

`
  
