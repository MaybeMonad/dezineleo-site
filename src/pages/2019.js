import React from 'react'
import { ResponsiveBump } from '@nivo/bump'
import { colors, distinctColors } from '../utils/constants'
import theme from '../utils/theme'

export default () => {
  const data = [
    {
      id: 'Dezineleo.com',
      data: [
        {
          x: 1,
          y: 2,
          percentage: 0,
        },
        {
          x: 2,
          y: 2,
          percentage: 5,
        },
        {
          x: 3,
          y: 2,
          percentage: 0,
        },
        {
          x: 4,
          y: 2,
          percentage: 16,
        },
        {
          x: 5,
          y: 2,
          percentage: 0,
        },
        {
          x: 6,
          y: 2,
          percentage: 4,
        },
        {
          x: 7,
          y: 2,
          percentage: 1,
        },
        {
          x: 8,
          y: 2,
          percentage: 2,
        },
        {
          x: 9,
          y: 2,
          percentage: 21,
        },
        {
          x: 10,
          y: 2,
          percentage: 20,
        },
        {
          x: 11,
          y: 2,
          percentage: 3,
        },
        {
          x: 12,
          y: 2,
          percentage: 1,
        },
      ],
    },
    {
      id: 'Break Elm',
      data: [
        {
          x: 1,
          y: 1,
          percentage: 0,
        },
        {
          x: 2,
          y: 1,
          percentage: 5,
        },
        {
          x: 3,
          y: 1,
          percentage: 0,
        },
        {
          x: 4,
          y: 1,
          percentage: 16,
        },
        {
          x: 5,
          y: 1,
          percentage: 0,
        },
        {
          x: 6,
          y: 1,
          percentage: 4,
        },
        {
          x: 7,
          y: 1,
          percentage: 1,
        },
        {
          x: 8,
          y: 1,
          percentage: 2,
        },
        {
          x: 9,
          y: 1,
          percentage: 21,
        },
        {
          x: 10,
          y: 1,
          percentage: 20,
        },
        {
          x: 11,
          y: 1,
          percentage: 3,
        },
        {
          x: 12,
          y: 1,
          percentage: 1,
        },
      ],
    },
    {
      id: 'JS Hub',
      data: [
        {
          x: 1,
          y: 3,
          percentage: 0,
        },
        {
          x: 2,
          y: 3,
          percentage: 5,
        },
        {
          x: 3,
          y: 3,
          percentage: 0,
        },
        {
          x: 4,
          y: 3,
          percentage: 16,
        },
        {
          x: 5,
          y: 3,
          percentage: 0,
        },
        {
          x: 6,
          y: 3,
          percentage: 4,
        },
        {
          x: 7,
          y: 3,
          percentage: 1,
        },
        {
          x: 8,
          y: 3,
          percentage: 2,
        },
        {
          x: 9,
          y: 3,
          percentage: 21,
        },
        {
          x: 10,
          y: 3,
          percentage: 20,
        },
        {
          x: 11,
          y: 3,
          percentage: 3,
        },
        {
          x: 12,
          y: 4,
          percentage: 1,
        },
      ],
    },
    {
      id: 'HYG',
      data: [
        {
          x: 1,
          y: 4,
          percentage: 0,
        },
        {
          x: 2,
          y: 4,
          percentage: 5,
        },
        {
          x: 3,
          y: 4,
          percentage: 0,
        },
        {
          x: 4,
          y: 4,
          percentage: 16,
        },
        {
          x: 5,
          y: 4,
          percentage: 0,
        },
        {
          x: 6,
          y: 4,
          percentage: 4,
        },
        {
          x: 7,
          y: 4,
          percentage: 1,
        },
        {
          x: 8,
          y: 4,
          percentage: 2,
        },
        {
          x: 9,
          y: 4,
          percentage: 21,
        },
        {
          x: 10,
          y: 4,
          percentage: 20,
        },
        {
          x: 11,
          y: 4,
          percentage: 3,
        },
        {
          x: 12,
          y: 3,
          percentage: 1,
        },
      ],
    },
  ]

  const CustomPoint = props => {
    const { x, y, data, isInactive, size, borderColor, borderWidth } = props

    return (
      <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
        <circle
          r={(size + borderWidth) / 2}
          cy={size / 5}
          fill="rgba(0, 0, 0, .2)"
        />
        <circle
          r={size / 2}
          fill={colors.greyDarker}
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
        {!isInactive && (
          <text
            textAnchor="middle"
            y={4}
            fill={colors.greyLight}
            fontSize="11px"
          >
            {Math.round(data.percentage)}
          </text>
        )}
      </g>
    )
  }

  return (
    <div
      style={{ backgroundColor: '#222429', minHeight: '100vh', width: '100vw' }}
    >
      <div style={{ height: 420 }}>
        <ResponsiveBump
          data={data}
          margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
          colors={distinctColors}
          inactiveLineWidth={5}
          theme={theme}
          enableGridX={true}
          enableGridY={false}
          axisTop={{
            tickSize: 0,
            tickPadding: 9,
          }}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 9,
          }}
          axisLeft={null}
          startLabel={true}
          startLabelTextColor={{
            from: 'color',
            modifiers: [['brighter', 1]],
          }}
          startLabelPadding={20}
          endLabel={true}
          endLabelTextColor={{
            from: 'color',
            modifiers: [['brighter', 1]],
          }}
          endLabelPadding={20}
          pointComponent={CustomPoint}
          lineWidth={5}
          pointSize={36}
          pointBorderWidth={3}
          pointBorderColor={{ from: 'serie.color' }}
          activeLineWidth={8}
          activePointSize={42}
          activePointBorderWidth={4}
          inactivePointSize={0}
          inactivePointBorderWidth={2}
        />
      </div>
    </div>
  )
}
