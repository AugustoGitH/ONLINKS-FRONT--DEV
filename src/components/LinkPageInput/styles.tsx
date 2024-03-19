import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";

export const LinkPageInput = styled.div`
  position: relative;
  padding: 0 0 2rem 0;
  animation: ${scaleUpPresence} .3s ease-in-out;
  .controls{
    padding: .5rem 0;
    
    display: flex;

    gap: .3rem;
    button.selected{
      opacity: 1;
    }
    button{
      width: 27px;
      font-size: .9rem;
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.dark.solid};
      opacity: .4;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
    .btn-delete{
      background-color: ${({ theme }) => theme.colors.danger.solid};
    }
    .btn-default{
      background-color: ${({ theme }) => theme.colors.alert.solid};
    }
  }
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .description {
    margin-top: 1rem;
    span.sub-title {
      margin-top: 0.5rem;
      text-align: center;
      display: block;
      font-size: calc(${({ theme }) => theme.font.size.headings.h4[0]});
      line-height: calc(${({ theme }) => theme.font.size.headings.h4[1]});
      font-weight: bold;
    }
    span.title {
      font-size: calc(
        ${({ theme }) => theme.font.size.headings.h3[0]} - 0.3rem
      );
      line-height: calc(
        ${({ theme }) => theme.font.size.headings.h3[1]} - 0.3rem
      );
      font-weight: bold;
      text-align: center;
      display: block;
    }
    p.desc {
      text-align: center;
      margin-top: 0.7rem;
      font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xxsm[1]};
    }
  }

  .btns{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .7rem;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    button.btn-increment-btn{
      border-radius: .5rem;
        transition: .2s linear;
        gap: .5rem;
        width: 300px;
        color: ${({ theme }) => theme.colors.primary.solid};
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        padding: .7rem;
        display: flex;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        border: 2px dotted ${({ theme }) => theme.colors.third.solid};
        opacity: .6;
        &:hover{
          opacity: 1;
        }
      i{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.third.solid};
      }
    }
  }
  .btns-confirm-save{
    animation: ${scaleUpPresence} .3s ease-in-out;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: .5rem;
    button{
      font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
      text-transform: uppercase;
      font-weight: bold;
    
      color: ${({ theme }) => theme.colors.dark.solid};
      padding: .3rem .6rem;
      border-radius: .2rem;
      opacity: .5;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
    button.btn-save{
      background-color: ${({ theme }) => theme.colors.third.solid};
    }
    button.btn-cancel{
      background-color: ${({ theme }) => theme.colors.danger.solid};
    }
  }
`;

interface TextInputProps {
  type: "h1" | "h2" | "p"
}

export const TextInput = styled.div<TextInputProps>`
  width: 100%;
  position: relative;
  &:hover .icon-paint{
    opacity: 1;
  } 
  .icon-paint{
    position: absolute;
    top: 0;
    right: 0;
    font-size: .8rem;
    opacity: 0;
    transition: .2s;
    color: ${({ theme }) => theme.colors.third.solid};
    cursor: pointer;
  }
  input, textarea{
    all: unset;
    width: 100%;
    
    text-align: center;
    color: ${({ theme, type }) => type === "p" ? theme.colors.light.weak : "inherit"};
    font-family: ${({ theme }) => theme.font.family.Poppins};
    font-weight: ${({ type }) => type !== "p" ? "bold" : "normal"};
    line-height: ${({ theme, type }) => type === "h1" ? `calc(${theme.font.size.headings.h3[1]} - .3rem)` : type === "h2" ? theme.font.size.headings.h4[1] : type === "p" ? theme.font.size.paragraphs.xxsm[1] : ""};
    font-size: ${({ theme, type }) => type === "h1" ? `calc(${theme.font.size.headings.h3[0]} - .3rem)` : type === "h2" ? theme.font.size.headings.h4[0] : type === "p" ? theme.font.size.paragraphs.xxsm[0] : ""};
  }
  textarea{
    white-space: break-spaces;
   overflow: hidden;
    
  }

`

export const ButtonInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: .3rem;
  animation: ${scaleUpPresence} .3s ease-in-out;
  &:hover .controls-edit{
    opacity: 1;
  }
  .modal-select-icons{
    position: absolute;
    top: 1rem;
    
  }

  .controls-edit{
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: .1rem;
    opacity: 0;
    transition: .2s;
    button{
      opacity: .8;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
    button.btn-delete-link{
      color: ${({ theme }) => theme.colors.danger.solid};
    }
    button.btn-edit-title{
      color: ${({ theme }) => theme.colors.third.solid};
    }
    button.btn-edit-link{
      color: ${({ theme }) => theme.colors.success.solid};
    }
    button .icon{
      font-size: .8rem;
      
      cursor: pointer;
    }
  }
  .edit-link-input{
    width: 300px;
    padding: .2rem 1rem;
  }
   .button{
 
        border-radius: .5rem;
        transition: .2s;
        gap: .5rem;
        width: 300px;
        color: ${({ theme }) => theme.colors.primary.solid};
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        padding: .7rem;
        display: flex;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.colors.third.solid};
        background-color: ${({ theme }) => theme.colors.third.solid};
        &:hover{
          background-color: transparent;
          color: ${({ theme }) => theme.colors.third.solid};
        } 
        input{
          all: unset;
          width: 100%;
          text-align: center;
        }
    
        .btn-add-icon{
         
          display: inline-flex;
          font-size: 1rem;
          transition: .2s;
          .icon-add-icons{
            opacity: .2;
          }
          &:hover{
            opacity: 1;
          }
        }
        
   }
`

export const BannerInput = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 0.6rem;
  height: 100px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.weak};

  input {
    display: none;
  }
  label {
    display: flex;
    width: 100%;
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.2s;
    background-color: #00000036;
    &:hover {
      opacity: 1;
    }
    .icon-paint {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: ${({ theme }) => theme.colors.third.solid};
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileInput = styled.div`
  z-index: 5;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -50px;
  background-color: ${({ theme }) => theme.colors.primary.weak};
  border: 4px solid ${({ theme }) => theme.colors.primary.solid};
  input {
    display: none;
  }
  .icon-user{
    color: ${({ theme }) => theme.colors.light.weak};
    font-size: 2rem;
    pointer-events: none;
  }
  label {
    display: flex;
    width: 100%;
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.2s;
    background-color: #00000036;
    border-radius: 50%;
    &:hover {
      opacity: 1;
    }
    .icon-paint {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: ${({ theme }) => theme.colors.third.solid};
    }
  }
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


export const AlertHelperText = styled.div`
  position: absolute;
  left: .6rem;
  top: 50%;
  transform: translateY(-50%);

  font-size: .9rem;
  .helper-text{
    position: absolute;
 
    top: 1.5rem;
    left: 0rem;
    z-index: 5;
    opacity: 0;
    pointer-events: none;
    font-size: calc(${({ theme }) => theme.font.size.paragraphs.xxsm[0]} - .1rem);
    line-height: calc(${({ theme }) => theme.font.size.paragraphs.xxsm[0]} - .1rem);
    background-color: ${({ theme }) => theme.colors.danger.solid};
    min-width: 140px;
    padding: .5rem .6rem;
    transition: .2s;
    border-radius: .4rem;
    &::after{
      position: absolute;
      content: '';
      width: 5px;
      height: 5px;
      transform: rotate(135deg);
      background-color: ${({ theme }) => theme.colors.danger.solid};
      left: .5rem;
      top: -2.5px;
    }
  }

  .icon-error:hover ~  .helper-text{
    opacity: 1;
    pointer-events: visible;
  }

  .icon-error{
    color: ${({ theme }) => theme.colors.danger.solid};
    cursor: pointer;
    transition: .2s ease; 
  }

`