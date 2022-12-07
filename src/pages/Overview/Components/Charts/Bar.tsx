import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { unahurPalette } from '@styles'
import { barProps } from './props'

export const Bar = ({ data }: barProps) => {
    let max = data ? Math.max(...data.map(x => x.tp.length)) * 7 : 0;
    return (
        <ResponsiveBar
            colors={[
                unahurPalette.unahurRed.main,
                unahurPalette.unahurGreen.main,
                unahurPalette.unahurGrey.main
            ]}
            data={data}
            keys={[
                'minimo',
                'maximo',
                'promedio',
            ]}
            indexBy="tp"
            margin={{top: 50, right: 60, bottom: 50, left: max}}
            padding={0.3}
            innerPadding={1}
            groupMode="grouped"
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            borderColor={{
                from: 'color',
                modifiers: [
                    ['darker', 1.6]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: 'middle',
                legendOffset: -350
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={'#ffffff'}
            layout={'horizontal'}
        />
    );
}
