import { useEffect, useState } from 'react';
import PresenterNameText from '../atoms/PresenterNameText'

interface Props {
    name_list: string[];
}

const ShuffleNameList = (props: Props) => {
    const { name_list } = props;

    return (
        <>
            {
                name_list.map((name: string, index: number) => {
                    return (
                        <div className="flex m-3">
                            <PresenterNameText text={`${index + 1} - ${name}`} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default ShuffleNameList;
