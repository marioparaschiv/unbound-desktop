const React = require('react');

module.exports = class Plugin extends React.Component {
   render() {
      const { height, width, ...rest } = this.props;

      return (<svg
         {...rest}
         width={width ?? 32}
         height={height ?? 32}
         viewBox='0 0 512 512'
         fill='currentColor'
      >
         <path d='M 1030 670 L 1050 815 L 1280 815.41602 L 1280 815.83203 A 158.16793 184.99996 0 0 1 1409.7891 910.41602 L 1320 910.41602 A -60.000014 72.499998 0 0 0 1260 982.91602 A -60.000014 72.499998 0 0 0 1320 1055.416 L 1422.6465 1055.416 A 158.16793 184.99996 0 0 1 1280 1185 L 1280 1185.416 L 1125 1185 L 1145 1330 L 1280 1330.416 C 1428.6535 1330.416 1552.0325 1211.4765 1575.832 1055.3965 L 1790 1055 L 1850 910 L 1568.7012 910.41016 C 1533.0847 771.90363 1417.3187 670.41602 1280 670.41602 L 1030 670 z ' transform='scale(0.26458333)' />
         <path d='M 620 605 C 482.67932 605 366.91159 706.49042 331.29688 845 L 155 845 L 95 990 L 324.17188 990 C 347.97875 1146.0703 471.35271 1265 620 1265 L 920 1265 L 900 1120 L 620 1120 L 620 1119.584 A 158.16793 184.99996 0 0 1 477.35352 990 L 580 990 A 60.000014 72.499998 0 0 0 640 917.5 A 60.000014 72.499998 0 0 0 580 845 L 490.21094 845 A 158.16793 184.99996 0 0 1 620 750.41602 L 620 750 L 830 750 L 810 605 L 620 605 z ' transform='scale(0.26458333)' />
      </svg>);
   }
};