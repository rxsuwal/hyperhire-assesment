import './post.scss'
import SimpleSlider from '../carousel/Slider';



const Post = () => {
    return (
        <section className='post'>
            <div className='post_header'>
                <div className='left'>
                    <a href="#">
                        <figure className='com_img-34'>
                            <img src="/assets/img/profile-sample.png" alt="profile-pic" />
                        </figure>
                    </a>
                    <div>
                        <div>
                            <span>안녕 나 응애</span>
                            <img className='com_img-14' src="./assets/icon/tick.png" style={{ margin: "0 4px" }} alt="verfied-icon" />
                            <small className='com_text-light'>1일전</small>
                        </div>

                        <small className='com_text-light'>165cm · 53kg</small>
                    </div>
                </div>
                <button className='com_btn com_btn-sm com_btn-pill com_btn-success'>
                    팔로우
                </button>
            </div>
            <div className="post_body">

                <div className="title">
                    지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
                </div>
                <p className='content'>
                    지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어?
                    <br />
                    <br />
                    후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???
                    <br />
                    <br />
                    올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!

                </p>

                <div className='tags'>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #2023
                    </button>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #TODAYISMONDAY
                    </button>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #TOP
                    </button>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #POPS!
                    </button>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #WOW
                    </button>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #2023
                    </button>
                    <button className="com_btn com_btn-sm com_btn-pill com_btn-light">
                        #ROW
                    </button>

                </div>
            </div>

            <div >
                <SimpleSlider>
                    <figure >
                        <img className="com_img-cover" src="/assets/img/1.jpg" alt="featured-img" />
                    </figure>
                    <figure >
                        <img className="com_img-cover" src="/assets/img/1.jpg" alt="featured-img" />
                    </figure>
                    <figure >
                        <img className="com_img-cover" src="/assets/img/1.jpg" alt="featured-img" />
                    </figure>
                </SimpleSlider>
            </div>

            <div className="post_footer">
                <div className="actions">
                    <button className='com_btn'>
                        <img src="/assets/icon/heart.png" alt="" />
                        <span>5</span>
                    </button>
                    <button className='com_btn'>
                        <img src="/assets/icon/comment.png" alt="" />
                        <span>5</span>
                    </button>
                    <button className='com_btn'>
                        <img src="/assets/icon/bookmark.png" alt="" />
                        <span>5</span>
                    </button>
                    <button className='com_btn'>
                        <img src="/assets/icon/three-dots.png" alt="" />

                    </button>
                </div>
                <div className="post_comments">

                    <div className="post_comments-thread">

                        <div className='head'>
                            <div className='left'>
                                <a href="">
                                    <figure className='com_img-34'>
                                        <img src="/assets/img/profile-sample.png" alt="" />
                                    </figure>
                                </a>
                                <strong>
                                    안녕 나 응애
                                </strong>
                                <figure className='com_img-14'>
                                    <img src="/assets/icon/tick.png" alt="" />
                                </figure>
                                <small className='com_text-light'>
                                    1일전
                                </small>
                            </div>

                            <button className='com_btn'>
                                <img src="/assets/icon/three-dots.png" alt="" />
                            </button>

                        </div>
                        <div className='content' >
                            <p>
                                어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!
                            </p>
                            <div className="actions">
                                <button className='com_btn'>
                                    <img src="/assets/icon/heart.png" alt="" />
                                    <span>5</span>
                                </button>
                                <button className='com_btn'>
                                    <img src="/assets/icon/comment.png" alt="" />
                                    <span>5</span>
                                </button>
                            </div>

                            {/* THREAD REPLY */}

                            <div className='thread-reply'>
                                <div className='head'>
                                    <div className='left'>
                                        <a href="">
                                            <figure className='com_img-34'>
                                                <img src="/assets/img/profile-sample-2.png" alt="" />
                                            </figure>
                                        </a>
                                        <strong>
                                            안녕 나 응애
                                        </strong>
                                        <figure className='com_img-14'>
                                            <img src="/assets/icon/tick.png" alt="" />
                                        </figure>
                                        <small className='com_text-light'>
                                            1일전
                                        </small>
                                    </div>

                                    <button className='com_btn'>
                                        <img src="/assets/icon/three-dots.png" alt="" />
                                    </button>

                                </div>
                                <div className='content' >
                                    <p>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>
                                    <div className="actions">
                                        <button className='com_btn'>
                                            <img src="/assets/icon/heart.png" alt="" />
                                            <span>5</span>
                                        </button>
                                    </div>



                                </div>
                            </div>



                        </div>
                    </div>


                    <form action="" >

                        <div className='comment_box-input'>

                            <label htmlFor="comment-file" >
                                <img src="/assets/icon/img-sample.png" className='com_img-24' alt="img-sample" />
                            </label>
                            <input type="file" hidden name='comment-file' id='comment-file' />

                            <input type="text" name="comment" placeholder='댓글을 남겨주세요.' />

                            <button type='submit' className='com_btn'>
                                등록
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Post