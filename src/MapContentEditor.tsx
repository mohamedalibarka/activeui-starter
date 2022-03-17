import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import {
    EditorProps,
    useDataModel,
    Tree,
    Measure,
    //MdxSelect,
    //parse,
    getMeasures,
    removeMeasure,
    addMeasure,
    //stringify,
} from '@activeviam/activeui-sdk';
import { MapWidgetState } from './map.types';

export const MapContentEditor: FC<EditorProps<MapWidgetState>> = (props) => {
    const { formatMessage } = useIntl();
    const dataModel = useDataModel('my-server');
    //const measures = dataModel ? dataModel.catalogs[0].cubes[0].measures : [];
    const cube = dataModel ? dataModel.catalogs[0].cubes[0] : null;

    //   const mdx = props.widgetState.mdx;
    //   const parseMdx = parse<MdxSelect>(mdx);
    //   const currentMeasureName = getMeasures(parseMdx)[0].measureName;
    const { mdx } = props.widgetState.query;
    const currentMeasureName = getMeasures(mdx)[0].measureName;

    const measures = (cube ? cube.measures : []).map((measure) => ({
        ...measure,
        isDisabled: measure.name === currentMeasureName,
    }));

    const handleMeasureClicked = (
        measure: Measure & { isDisabled: boolean }
    ) => {
        //console.log(`We want to switch to ${measure.name}!`)
        //   const mdx = props.widgetState.mdx;
        //   const newMdx = mdx.replace(
        //       /\[Measures\]\.\[.*\]/,
        //       `[Measures].[${measure.name}]`
        //   );
        if (!cube) {
            // This should normally not happen.
            // But if it does, then abort mission.
            return;
        }

        const parsedMdxWithoutCurrentMeasure = removeMeasure(mdx, {
            cube,
            measureName: currentMeasureName,
        });
        const parsedMdxWithNewMeasure = addMeasure(
            parsedMdxWithoutCurrentMeasure,
            {
                cube,
                measureName: measure.name,
            }
        );

        props.onWidgetChange({
            ...props.widgetState,
            query: {
                mdx: parsedMdxWithNewMeasure,
            },
        });
    };
    return (
        <Tree
            isSearchVisible={true}
            //searchPlaceholder="Search measures"
            searchPlaceholder={formatMessage({
                id: 'aui.plugins.widget.map.searchMeasures',
            })}
            value={measures}
            onClick={handleMeasureClicked}
        />
    );
};
