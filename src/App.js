import logo from './logo.svg';
import './App.scss';

function App() {
    return (

        <div className="container resume">
            <div className="resume">
                <div className="title">
                    <img className="my-img" src="https://thumbs.dreamstime.com/z/good-looking-man-17514585.jpg"/>
                    <div className="name">
                        <span className="fio">My name Bandit</span>
                        <span className="work-name">Full-stack developer</span>
                        <span className="number">+7-999-999-99-99</span>
                        <span className="email">glonac@proton.com</span>
                    </div>
                </div>
                <div className="main-part">
                    <div className="info">
                        <div className="about-me">
                            <span className="fio">Обо мне </span>
                            <div className="about-me-text">Info</div>
                        </div>
                        <div className="education">
                            <span className="fio">Образование</span>
                            <div className="education-text">Info</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="skills">
                            <span className="fio">Навыки</span>
                            <li>php</li>
                            <li>js</li>
                            <li>yii2</li>
                            <li>git</li>
                        </div>
                        <div className="Work-experience">
                            <span className="fio">Опыт работы</span>
                            <div className="work-info-text">
                                Work experience and others
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <span className="fio">Ссылки на работы</span>
                        <div className="works-links">
                            <li>LINK</li>
                            <li>LINK</li>
                        </div>
                        <div className="git">
                            <span className="fio">Git</span>
                            gitLInks
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
