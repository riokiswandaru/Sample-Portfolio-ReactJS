import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

class Content extends React.Component {

    render() {
        return (
            <div>
                <hr />
                <div className="section" id="about">
                    <h1>About</h1>
                    <p>
                        William Henry "Bill" Gates III (lahir 28 Oktober 1955) adalah seorang tokoh bisnis, investor, filantropis, penulis asal Amerika Serikat, serta mantan CEO yang saat ini menjabat sebagai ketua Microsoft, perusahaan perangkat lunak yang ia dirikan bersama Paul Allen.[3] Ia menduduki peringkat tetap di antara orang-orang terkaya di dunia dan menempati peringkat pertama sejak 1995 hingga 2009, tidak termasuk 2008 ketika ia turun ke peringkat tiga.
                        Gates termasuk salah seorang pengusaha revolusi komputer pribadi terkenal di dunia. Meski demikian, taktik bisnisnya dikritik karena dianggap anti-kompetitif.[4][5] Pada tahap-tahap akhir kariernya, Gates melakukan beberapa usaha filantropi dengan menyumbangkan sejumlah besar dana ke berbagai organisasi amal dan program penelitian ilmiah melalui Bill & Melinda Gates Foundation yang didirikan tahun 2000.
                        Bill Gates mengundurkan diri dari jabatannya sebagai pejabat eksekutif tertinggi di Microsoft pada bulan Januari 2000. Ia masih menjabat sebagai ketua dan membentuk jabatan kepala arsitek perangkat lunak. Pada Juni 2006, Gates mengumumkan bahwa ia akan bekerja paruh waktu di Microsoft dan purna waktu di Bill & Melinda Gates Foundation. Ia melimpahkan secara bertahap semua pekerjaannya kepada Ray Ozzie, kepala arsitek perangkat lunak, dan Craig Mundie, pejabat riset dan strategi tertinggi Microsoft. Hari kerja purna waktu terakhir Gates di Microsoft adalah 27 Juni 2008. Saat ini, ia masih bekerja di Microsoft sebagai ketua non-eksekutif.
                    </p>
                </div>
                <hr />
                <div className="section" id="experience">
                    <h1>Experience</h1>
                    <ul>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Ketua Microsoft</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Ketua Corbis</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Ketua Pendamping Bill & Melinda Gates Foundation</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Direktur Berkshire Hathaway</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> CEO Cascade Investment</li>
                    </ul>
                </div>
                <hr />
                <div className="section" id="skills">

                    <h1>Skills</h1>
                    <ul>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Expertise</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Passion</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Influence</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Empowerment Of Others</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Always-Learning Attitude</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Limitless Goals</li>
                    </ul>
                </div>
                <hr />
                <div className="section" id="interest">
                    <h1>Interest</h1>
                    <ul>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Software Developer</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Author</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Investor</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-check" /> Philanthropist</li>
                    </ul>
                </div>
                <hr />
                <div className="section" id="awards">
                    <h1>Awards</h1>
                    <ul>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 2013 - Mary Woodard Lasker Award for Public Service</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 2010 - Silver Buffalo Award</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 1997 - Satellite Special Achievement Award</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 1994 - Distinguished Fellow of the British Computer Society</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 1992 - National Medal of Technology and Innovation</li>
                    </ul>
                </div>
                <hr />
            </div>
        )
    }
}
export default Content;