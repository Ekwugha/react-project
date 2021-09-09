import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './about.styles.css'

function About() {
    return (
        <div>
            <Image src='assest/pic-5.jpg' className='header-image' />
            <Container>
                <Row>
                    <Col xs={12} sm={8} lg={8} >
                        <Image src='assest/pic-1.jpg' width='171' className='about-profile-pic' roundedCircle />
                        <h3>John Doe The Man</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorem perferendis magni ducimus quae officiis sequi nam ex non, facere nesciunt ipsa obcaecati ad tempore itaque tenetur, a in ut!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi voluptatum quos, ipsam ut blanditiis ipsa? Praesentium illo architecto maxime error, porro accusantium recusandae illum placeat inventore, fugit deleniti nisi.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam itaque reiciendis molestiae, molestias illum similique.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero, fugit quos pariatur repudiandae dolorum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis praesentium distinctio mollitia rerum delectus nemo, animi excepturi est aspernatur tempora architecto temporibus reiciendis vitae assumenda! Porro voluptatum fuga quae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga autem, mollitia iste quae consectetur nostrum omnis nihil sequi obcaecati accusamus veniam sunt ex illo, minima iusto repellendus adipisci possimus. Harum autem corporis, praesentium excepturi officia repellendus necessitatibus nemo aut vero delectus, aliquid nisi saepe earum quia repellat nulla dolorum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dolor ad totam quae, esse mollitia repellat veniam temporibus et illo veritatis est obcaecati consequatur dolorum iusto sequi vitae unde iure!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero, fugit quos pariatur repudiandae dolorum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab, voluptas ex expedita mollitia eos eaque dolorem itaque doloribus nisi?</p>
                    </Col>
                    <Col xs={12} sm={4} lg={4} className='sidebar-section'>
                        <Image src='assest/pic-6.jpg' />
                        <div className="mt-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus doloribus sit ratione esse aperiam quia laboriosam! Iure sequi quae pariatur placeat excepturi animi provident, debitis qui! Quam vitae eveniet nisi harum possimus asperiores, iusto sit, assumenda vel soluta optio culpa? Earum numquam exercitationem doloribus, consequuntur magnam sequi nam inventore.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ea dolorum dolore dignissimos fuga iure quos. Cupiditate, quibusdam qui! Quasi, ipsam optio, tenetur voluptate, autem expedita sint modi at nihil distinctio rem nisi alias dolore. Minima doloremque animi aliquam assumenda nemo consectetur repellat aut nesciunt! Excepturi cum praesentium dolorem labore?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;