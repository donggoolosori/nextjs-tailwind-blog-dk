import Tag from '@components/Tags/Tag';
import { Tags } from '@lib/tag';
import React from 'react';

interface Props {
  allTags: Tags;
}

const AllTags = ({ allTags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-20 max-w-3xl">
      {allTags.map((tag, idx) => (
        <Tag key={tag[0] + idx} tag={tag[0]} count={tag[1]} />
      ))}
    </div>
  );
};

export default AllTags;
