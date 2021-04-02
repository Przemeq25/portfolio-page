import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  ProjectInfoList,
  ProjectInfoListItem,
  ProjectInfoWrapper,
  ProjectInfoListItemText,
} from './ProjectInfo.styles';

const ProjectInfo = ({ projectInfo }) => {
  const infoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.set(infoRef.current.children, {
      autoAlpha: 0,
      x: '-=10',
    });

    gsap.to(infoRef.current.children, {
      autoAlpha: 1,
      x: '+=10',
      ease: 'power2.inOut',
      stagger: 0.3,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: '50 bottom',
      },
    });
  });
  return (
    <ProjectInfoWrapper ref={wrapperRef}>
      <ProjectContainer>
        <ProjectInfoList ref={infoRef}>
          {projectInfo.map(({ title, items }) => (
            <ProjectInfoListItem key={title}>
              <ProjectInfoListItemText size="md" weight="medium" margin={10}>
                {title}
              </ProjectInfoListItemText>

              {items.split(', ').map((item) => (
                <ProjectInfoListItemText
                  key={item}
                  size="xs"
                  weight="light"
                  color="tertiary"
                >
                  {item}
                </ProjectInfoListItemText>
              ))}
            </ProjectInfoListItem>
          ))}
        </ProjectInfoList>
      </ProjectContainer>
    </ProjectInfoWrapper>
  );
};
export default ProjectInfo;

ProjectInfo.propTypes = {
  projectInfo: PropTypes.arrayOf(PropTypes.object),
};

ProjectInfo.defaultProps = {
  projectInfo: [
    { title: 'Role', items: '-' },
    {
      title: 'Tech stack',
      items: '-',
    },
    { title: 'Date', items: '-' },
  ],
};
