import Logo from './Logo.png';
import template1 from '../assets/template1.png';
import template2 from '../assets/template2.png';
import template3 from '../assets/template3.png';
import template4 from '../assets/template4.png';
import template5 from '../assets/template5.png';
import uploadIcon from './upload-icon.png';
export const assets= {
    template1,
    template2,
    template3,
    template4,
    template5,
    Logo,
    uploadIcon,
};

export const templates = [
    { id: "template1", label: "Template 1", image: assets.template1 },
    { id: "template2", label: "Template 2", image: assets.template2 },
    { id: "template3", label: "Template 3", image: assets.template3 },
    { id: "template4", label: "Template 4", image: assets.template4 },
    { id: "template5", label: "Template 5", image: assets.template5 },
];
