import { Link } from 'gatsby';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const ProjectHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  z-index: 100;
  transition: all 300ms ease-in-out;
  ${({ theme }) => theme.mediaBreakpoints.md} {
    justify-content: center;
  }
`;

export const ProjectChanger = styled(Paragraph)`
  position: relative;
  transition: all 300ms ease-in-out;

  &:after {
    content: '${({ next }) => (next ? '\u2192' : '\u2190')}';
    position: absolute;
    ${({ next }) => (next ? 'right: -50px;' : 'left: -50px;')};
    top: 50%;
    transform: translateY(-60%);
    font-size: 30px;
    height: 100%;

    ${({ theme }) => theme.mediaBreakpoints.md} {
      font-size: 20px;
      ${({ next }) => (next ? 'right: -40px;' : 'left: -40px;')};
    }
  }
`;

export const ProjectChangerWrapper = styled(Link)`
  width: 100%;
  padding: 0px 60px;
  cursor: pointer;
  visibility: hidden;
  text-align: ${({ next }) => (next ? 'right' : 'left')};
  transition: all 300ms ease-in-out;

  &:hover > ${ProjectChanger} {
    opacity: 0;
  }

  span {
    transition: all 300ms ease-in-out;
    display: block;
  }

  &:hover > span {
    font-size: 20px;
    transform: translateY(-45%);
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    display: none;
  }
`;
