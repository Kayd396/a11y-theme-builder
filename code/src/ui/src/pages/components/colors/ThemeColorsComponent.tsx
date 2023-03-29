import React from 'react';
import { HeadingSection } from '../../content/HeadingSection';
import { ComputedColorSwatch } from '../../../components/ComputedColorSwatch';

interface Props {
}

const swatchesObj = {
    labels: ["Primary", "Secondary", "Tertiary"],
    shadeIds: ["050", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    classNameSuffix: "bg",
}

export const ThemeColorsComponent: React.FC<Props> = ({}) => {

    return (
        <div>
            <HeadingSection title="Colors" heading="Theme Colors" />
            {swatchesObj.labels.map((swatchLabel) => {
                return (
                    <div>
                        <div className="subtitle1 top40">{swatchLabel}</div>
                        <div className="theme-colors">
                            {swatchesObj.shadeIds.map((shadeId) => {
                                return (
                                    <ComputedColorSwatch
                                        className={`${swatchLabel.toLowerCase()}-${shadeId}-${swatchesObj.classNameSuffix}`}
                                        label={`${swatchLabel}-${shadeId}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}