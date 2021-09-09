import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './news.styles.css';

function News() {
    return (
        <div>
            <Image src='assest/pic-8.jpg' className='header-image mx-auto' />
            <Container>
                <h2>News</h2>
                <Row>
                    <Col xs={12} sm={8} className='main-section'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis facere optio saepe minima suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in quaerat neque consectetur tenetur dolore.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut consequatur numquam, itaque fugit at.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sed amet, odio esse obcaecati velit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique neque explicabo itaque dolores quasi!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam eligendi voluptatem nisi ipsam mollitia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio dolores pariatur saepe. Dolor, mollitia!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur in libero et delectus placeat.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque repellendus consectetur autem? Pariatur, molestiae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit suscipit deleniti quibusdam cupiditate error!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem quas sapiente provident? Eius, officiis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti impedit eum dolorem! Dolor, rerum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt vel, eius sint repellat corrupti.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio placeat eum accusamus esse nobis ab!</p>
                    </Col>
                    <Col xs={12} sm={4} className='sidebar-section'>
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

export default News;