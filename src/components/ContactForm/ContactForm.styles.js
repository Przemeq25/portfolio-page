import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

export const MailLink = styled.a`
  font-style: italic;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.desktop.xs};

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.xs};
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    max-width: 400px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  color: rgba(0, 0, 0, 0.7);
  font-size: ${({ theme }) => theme.font.size.desktop.sm};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.sm};
  }
`;

export const ErrorText = styled.p`
  color: rgba(255, 0, 0);
  font-size: ${({ theme }) => theme.font.size.desktop.xs};
  padding: 2px 0 5px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.xs};
  }
`;

const labelAnimation = css`
  transform: translateY(-16px);
  font-size: 0.7em;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: 0.6em;
  }
`;

const inputStyle = css`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.desktop.sm};
  width: 100%;
  font-family: ${({ theme }) => theme.font.family};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormLabel} {
    ${labelAnimation};
  }

  &:valid ~ ${FormLabel} {
    ${labelAnimation};
  }

  &:required {
    box-shadow: none;
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.sm};
  }
`;

export const FormInput = styled.input`
  ${inputStyle}
`;

export const FormTextArea = styled(TextareaAutosize)`
  ${inputStyle};
  resize: none;
`;

export const SendMessageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
