import React, { useEffect } from "react"

const Styles = require("./style.module.scss")

import {
  HomeOutline,
  SettingsOutline,
  GlobeOutline,
  DocumentTextOutline
} from 'react-ionicons'

import IO from "./intersectionObserver"

const Jamstack = () => {
  useEffect(() => {
    IO();
  }, [])

  return (
    <div className={Styles.allWrapper}>
      <nav className={Styles.nav}>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">Architecture</a></li>
          <li><a href="#">Sample Sites</a></li>
          <li><a href="#">Blog Article</a></li>
        </ul>
      </nav>

      <header className={`${Styles.header} ${Styles.view}`} id="view1">
        <h1><span className={Styles.cutout}>Jamstack</span>なWebサイトを構築してみた</h1>
        <p>2021年度中に10個の<span className={Styles.cutout}>Jamstack</span>サイトを作成することを目標にしています(努力目標)。</p>
        <ul className={Styles.box}>
          <li>Static Site Generator</li>
          <li><span className={Styles.charGradient}>&</span></li>
          <li>HeadlessCMS<br />Text file</li>
          <li><span className={Styles.charGradient}>&</span></li>
          <li>Hosting Web Service</li>
        </ul>

        <div className={Styles.scroll}>SCROLL</div>
      </header>

      <ol id="viewList" className={Styles.viewList}>
        <li data-li="view1">
          <a href="#view1">
            <HomeOutline
              height="30px"
              width="30px"
            />
          </a>
        </li>
        <li data-li="view2">
          <a href="#view2">
            <SettingsOutline
              height="30px"
              width="30px"
            />
          </a>
        </li>
        <li data-li="view3">
          <a href="#view3">
            <GlobeOutline
              height="30px"
              width="30px"
            />
          </a>
        </li>
        <li data-li="view4">
          <a href="#view4">
            <DocumentTextOutline
              height="30px"
              width="30px"
            />
          </a>
        </li>
      </ol>

      <section className={`${Styles.section} ${Styles.view} ${Styles.view2}`} id="view2">
        <h2 className={Styles.sectionTitle}>Architecture</h2>
        <div className={Styles.container}>
          <div className={Styles.box}>
            <span></span>
            <div className={Styles.content}>
            <h3>SSG</h3>
            <p>NextJSやNuxt.js、Gatsbyなどのフレームワークの機能を使い、HTMLやCSSなどの静的ファイルを書き出します。</p>
          </div>
        </div>

        <div className={Styles.box}>
          <span></span>
          <div className={Styles.content}>
            <h3>Headless CMS</h3>
            <p>動的なデータはHeadless CMSサービスを使って管理します。データベースを持つ必要はありません。</p>
          </div>
        </div>

        <div className={Styles.box}>
          <span></span>
          <div className={Styles.content}>
            <h3>CDN</h3>
            <p>静的ファイルはCDNサービスを使って配信します。バックエンドを持たないJamstackならではのメリットです。</p>
          </div>
        </div>
      </div>

      <table className={Styles.archTable}>
        <tr>
          <th>SSG</th>
          <td>NextJS　Gatsby　Nuxt.js　Gridsome　SvelteKit</td>
        </tr>
        <tr>
          <th>Headless<br />CMS</th>
          <td>microCMS　Contentful　graphCMS　prismic</td>
        </tr>
        <tr>
          <th>CDN</th>
          <td>AWS Amplify　Netlify　Vercel　Gatsby Cloud</td>
        </tr>
      </table>
    </section>

    <section className={`${Styles.section} ${Styles.view} ${Styles.view3}`} id="view3">
      <h2 className={Styles.sectionTitle}>Sample Sites</h2>

      <div className={Styles.wrapper}>

        <a
          className={Styles.content}
          href="https://blog.toriwatari.work/page/1/"
          target="_blink"
        >
          <div className={`${Styles.pageNumber} ${Styles.page1}`}>
            <span></span>
            <h4>#01</h4>
          </div>
          <div className={Styles.setumei}>
            <h3>Portfolio Site</h3>
            <p>このドメインのサイトです。Gatsbyで作成しました。</p>
          </div>
        </a>

        <a
          className={Styles.content}
          href="https://blog.toriwatari.work/page/1/"
          target="_blink"
        >
          <div className={`${Styles.pageNumber} ${Styles.page2}`}>
            <span></span>
            <h4>#02</h4>
          </div>
          <div className={Styles.setumei}>
            <h3>鳥に生まれることができなかった人へ</h3>
            <p>GatsbyとMarkdownファイルで個人ブログを作成しました。</p>
          </div>
        </a>

        <a
          className={Styles.content}
          href="cssanimation.toriwatari.work"
          target="_blank"
        >
          <div className={`${Styles.pageNumber} ${Styles.page3}`}>
            <span></span>
            <h4>#03</h4>
          </div>
          <div className={Styles.setumei}>
            <h3>CSS Animation & Tips</h3>
            <p>Gatsbyとmdxファイルを使って、CSSのアニメーションやTipsを解説するサイトを作成しました。</p>
          </div>
        </a>

        <a
          className={Styles.content}
          href="https://gatsby-micro-cms.vercel.app/"
          target="_blink"
        >
          <div className={`${Styles.pageNumber} ${Styles.page4}`}>
            <span></span>
            <h4>#04</h4>
          </div>
          <div className={Styles.setumei}>
            <h3>Gatsby-microCMS-Site</h3>
            <p>GatsbyとmicroCMSを組み合わせたサイトを作りました。<br />Headless UIを導入しています。</p>
          </div>
        </a>

			<a
        className={Styles.content}
				href="https://gatsby-contentful-site.netlify.app"
				target="_blink"
			>
        <div className={`${Styles.pageNumber} ${Styles.page5}`}>
					<span></span>
					<h4>#05</h4>
				</div>
        <div className={Styles.setumei}>
					<h3>Gatsby-Contentful-Site</h3>
					<p>GatsbyとContentfulを組み合わせたサイトを作りました。</p>
				</div>
			</a>

			<a
        className={Styles.content}
				href="/"
				target="_blink"
			>
        <div className={`${Styles.pageNumber} ${Styles.page6}`}>
					<span></span>
					<h4>#06</h4>
				</div>
        <div className={Styles.setumei}>
					<h3>Gatsby-graphCMS-Site</h3>
					<p>GatsbyとgraohCMSを組み合わせたサイトを作成しました。</p>
				</div>
			</a>

			<a
        className={Styles.content}
				href="/"
				target="_blink"
			>
        <div className={`${Styles.pageNumber} ${Styles.page7}`}>
					<span></span>
					<h4>#07</h4>
				</div>
        <div className={Styles.setumei}>
					<h3>NextJS-graphCMS-Site</h3>
					<p>GatsbyとContentfulを組み合わせたサイトを作りました。<br />CSSフレームワークはTailwind CSSを採用しました。</p>
				</div>
			</a>

			<a
        className={Styles.content}
				href="/"
				target="_blink"
			>
        <div className={`${Styles.pageNumber} ${Styles.page8}`}>
					<span></span>
					<h4>#08</h4>
				</div>
        <div className={Styles.setumei}>
					<h3>NextJS-microCMS-Site</h3>
					<p>NextJSとmicroCMSを組み合わせたサイトを作りました。</p>
				</div>
			</a>
    </div>
	</section>

  <section className="view view4" id="view4">
    jgao
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </section>
    </div>
  )
}

export default Jamstack