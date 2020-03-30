export default () => {
    return <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          background: #FCF9E9;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          -webkit-backface-visibility: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        input{
            width: 100%;
            border: none;
            background: transparent;
            box-sizing: border-box;
            padding: 10px 20px;
            font-size: 34px;
            text-align: center;
            outline: none;
            border-bottom: 2px solid black;
        }
        .hebrew{
            direction: rtl;
        }
        select{
            background: none;
            border: none;
            outline: none;
        }
        a{
            color: black;
        }
        ul{
            list-style-type: none;
            padding: 0;
            margin:0;
        }
        ul li{
            color: #444;
            padding-right: 10px;
            padding-top: 3px;
            padding-bottom:3px;
            cursor: pointer;
            border-right: 2px solid transparent;
        }
        ul li.active{
            font-weight: bold;
            border-color: #F8D57E;
        }
        .english ul li{
            border-right: none;
            padding-left: 10px;
            padding-right: 0;
            border-left: 2px solid transparent;
        }
        .english ul li.active{
            border-color: #F8D57E;
        }
        .menu_items a{
            margin-left: 13px;
        }
        p{
            font-size: 18px;
            line-height: 24px;
            margin: 0;
            padding: 0;
            margin-bottom: 13px;
        }
        img.responsive{
            width: 100%;
        }
        mt-1{
            margin-top: 13px;
        }
        .mt-2{
            margin-top: 26px;
        }
        .mt-3{
            margin-top: 39px;
        }
        .mt-4{
            margin-top: 52px;
        }
          
        .mb-1{
            margin-bottom: 13px;
        }
        .mb-2{
            margin-bottom: 26px;
        }
        .mb-3{
            margin-bottom: 39px;
        }
        .mb-4{
            margin-bottom: 52px;
        }
        .center{
            text-align: center;
        }
        .footer{
            margin-top: 52px;
            font-size: 13px;
            text-align: center;
        }
        button{
            color: #000;
            font-size: 18px;
            font-weight: bold;
            background-color: #F8D57E;
            border-radius: 23px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            outline: none;
            margin-left: 26px;
            transition: .15s ease;
            transition-property: all;
            position: relative;
        }
        button:hover{
            background-color: #ffd262;
            transform: scale(1.1);
        }
        button:active{
            background-color: #ffd262;
            transform: scale(0.99);
        }
        button:disabled{
            opacity: 0.8;
            background: #e2e2e2;
            cursor: not-allowed;
        }
        button.with_icon{
            padding-right: 35px;
        }
        button.with_icon img{
            position: absolute;
            right: 15px;
            top: 10px;
        }
        button:hover .tooltip{
            display: block;
        }
        button .tooltip{
            position: absolute;
            background: #000;
            color: #fff;
            border-radius: 3px;
            padding: 6px;
            font-size:13px;
            bottom: -35px;
            left: 26%;
            display: none;
        }
        .arrow-up {
            width: 0; 
            height: 0; 
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid black;
            position: absolute;
            top: -10px;
            left: 43%;
        }
        .mission p{
            max-width: 1000px;
        }
        .relative{position:relative;}
      `}</style>
}