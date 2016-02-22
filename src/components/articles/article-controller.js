import _ from 'lodash';

class ArticleController {
	constructor($stateParams) {
		this._$stateParams = $stateParams;

		this.list = [
			{
				id: 1,
				title: 'Title 1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptate beatae necessitatibus rem architecto illum saepe accusantium, cum quaerat tempora sit, fugiat, aliquid. Eius blanditiis, recusandae ullam. Molestiae provident, perspiciatis adipisci. Doloribus maiores possimus, ea laudantium perferendis. Magni dolore illo facere minima sequi quo recusandae placeat, ab provident dignissimos reprehenderit, sunt nulla modi quisquam. Aut necessitatibus placeat tenetur vero provident nam, cum laboriosam nulla officiis a cumque asperiores sapiente quam accusamus accusantium hic ipsam quos nisi! Accusantium vel unde est voluptatibus, rem dolores quibusdam eius omnis praesentium, laboriosam at beatae repellendus ea ab, ipsa. Rerum cupiditate voluptatem voluptates distinctio dignissimos voluptas aperiam neque laudantium ratione, pariatur dolorum hic laboriosam porro quibusdam doloremque autem excepturi itaque quisquam delectus nisi. Quaerat aut labore eius temporibus delectus, repellendus laudantium asperiores, unde deleniti fuga corporis a quisquam? Ad accusantium, dignissimos temporibus impedit tempore nesciunt, in ex architecto natus rem porro sapiente voluptatibus pariatur minima!',
				author: 'Author 1',
				date: new Date('2015-12-25')
			},
			{
				id: 2,
				title: 'Title 2',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur atque, est adipisci cumque excepturi sunt eius quis dicta nesciunt facilis, corrupti expedita architecto, porro. Doloremque, voluptas illum, libero reiciendis architecto optio saepe facere quis dolorum autem, repellat rem assumenda nam esse incidunt voluptatem iure sunt placeat, possimus commodi. Laboriosam nemo dolorem error, facilis eveniet hic. Assumenda ab suscipit nesciunt! Sint adipisci voluptatem harum, reprehenderit ipsa cum delectus eveniet, accusamus error nobis. Non nemo ratione, nihil autem molestiae commodi dolore debitis quidem excepturi voluptatibus quas qui itaque aperiam modi, ea aliquam unde ipsam cumque beatae. Consequatur et omnis nobis molestias dolorem eveniet, quasi corporis neque vero incidunt, eius itaque minus eum expedita tempora ratione repudiandae ea ut, explicabo unde, sapiente! Mollitia, iste beatae. Quidem voluptates tenetur deleniti aliquid quae natus nisi quas dicta cumque! Ex autem rem eveniet, omnis perferendis repudiandae ipsa hic magnam voluptatum voluptates nihil deserunt, officiis ipsum odio adipisci! Aliquid deleniti consequatur tenetur, voluptate officia eius laborum nemo aspernatur excepturi ipsam. Consequuntur mollitia explicabo, provident inventore dolor neque dolores saepe! Odit nulla quisquam, ullam autem nihil. Ipsam itaque ipsa numquam, repellendus laboriosam maiores vero et eligendi soluta quia officiis corporis! Dolorem, fugit nobis recusandae ipsam tempore, est nostrum?',
				author: 'Author 1',
				date: new Date('2015-12-29')
			},
			{
				id: 3,
				title: 'Title 3',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quidem, est, necessitatibus libero similique provident, facilis atque possimus quaerat voluptas optio commodi nam repudiandae. Ex quisquam ad, necessitatibus tempora! Fugiat voluptatum esse alias blanditiis, ab dignissimos cum nobis repudiandae tempore magni animi amet tenetur quos impedit adipisci quis ipsum incidunt ut, neque ipsam. Commodi esse debitis possimus facere quaerat, perspiciatis cum vitae consequatur soluta velit, tempore inventore sed quod dolores ad voluptatibus molestias voluptatem amet, fugiat in nam corrupti cumque praesentium corporis! Totam odit veritatis explicabo ipsam dicta expedita doloribus! Distinctio soluta impedit sit architecto blanditiis minima pariatur quod magnam? Sint odit voluptas quo. Culpa atque, nesciunt asperiores veniam illum animi provident deleniti accusantium? Deserunt laudantium dolorum voluptatem hic, accusantium, a ratione quisquam esse odio fuga ipsam ipsa asperiores rem atque, dolores minima modi sequi repellat soluta deleniti. Qui omnis doloribus quas dicta blanditiis accusamus, quisquam est, deserunt obcaecati sit sapiente quo enim. Aliquam, obcaecati accusamus, voluptates laboriosam iste laudantium eum quos soluta consectetur ipsa a sed, provident sunt saepe quibusdam animi, dolorem maxime? Dolorem earum minima eos omnis unde.',
				author: 'Author 2',
				date: new Date('2016-01-25')
			},
			{
				id: 4,
				title: 'Title 4',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sint provident nemo aspernatur vero, iusto architecto voluptates, ea nisi sapiente officia labore sed, dolore quia voluptatem porro minus ratione debitis nulla similique magnam at quod. Ad animi impedit fugiat minima nulla repellat minus fugit necessitatibus molestias veniam rem eaque corporis esse natus magnam facere, qui, in culpa blanditiis veritatis illum. Reprehenderit quia quod dolorem fuga rerum accusantium quasi voluptate laboriosam, doloribus reiciendis iusto aperiam odio illum, beatae natus! Impedit adipisci animi veritatis possimus eligendi esse dignissimos, quaerat quae blanditiis, placeat nulla. Inventore rem in repellat, eligendi modi culpa possimus, earum illum quisquam ducimus aliquid totam voluptatem facere. Ipsum, dignissimos quidem tempora. Error repudiandae perspiciatis praesentium, non minus minima ut voluptas architecto nihil voluptatum officiis rerum tenetur laborum doloribus placeat. Tenetur totam eius dolores, ratione autem dolorem quaerat esse atque architecto et aut mollitia ullam velit adipisci asperiores delectus quibusdam necessitatibus est voluptatum fugit tempore sed quam aperiam nemo quidem. Provident perferendis facilis quisquam sunt a, illum dignissimos mollitia consequuntur at dolore! Eius eaque officiis esse laudantium voluptas saepe error quam molestiae aperiam eos excepturi non, libero quo, tenetur ratione molestias, aliquid fugiat. Maxime nostrum a voluptatibus, possimus blanditiis ipsam eaque atque omnis adipisci, iusto vel suscipit, assumenda impedit nemo voluptas.',
				author: 'Author 2',
				date: new Date('2016-01-05')
			},
			{
				id: 5,
				title: 'Title 5',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, temporibus hic quos id culpa harum cumque rerum! Fugiat non, ipsa deserunt, mollitia laboriosam quia et assumenda temporibus velit, earum sit magnam unde suscipit amet itaque! Sed repudiandae dicta in fuga cupiditate sint sit ipsam sunt deserunt excepturi expedita saepe doloremque, dolorum, inventore tempore similique, aut esse asperiores unde aliquid quas hic modi ratione libero? Doloribus vero illum, fuga eveniet quisquam earum numquam facilis quae quia aliquid hic architecto dolor amet fugiat, laboriosam repudiandae dolorem laborum. Voluptas quis perspiciatis expedita ratione optio ipsum nulla animi repudiandae explicabo tempore a, consectetur error nostrum. Placeat maxime, corporis minima in est culpa pariatur, ex laudantium veritatis nesciunt aperiam eum harum ipsa fugiat cum aliquam autem! Porro provident debitis culpa alias, blanditiis sapiente, suscipit veritatis. Ea fugiat ratione delectus magni, cupiditate repellendus alias culpa amet sint voluptatem quo, commodi vero dolor assumenda fugit neque omnis!',
				author: 'Author 1',
				
				date: new Date('2015-12-25')
			},
			{
				id: 6,
				title: 'Title 6',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae explicabo deleniti quas a, autem. Consequuntur fuga optio qui veritatis blanditiis earum quos! Quo cupiditate distinctio error pariatur fugiat eligendi, asperiores repellendus tempora consequatur! Accusantium quas facere quibusdam iusto rem quos illum? Beatae asperiores quaerat qui quisquam, deleniti, neque consequuntur provident dolore atque minima nobis blanditiis autem vero. Impedit, nam odio provident. Reiciendis inventore dicta, eligendi atque magnam nihil! Aperiam a possimus doloremque quod! Nulla eveniet delectus dignissimos voluptate sunt rerum sequi officia quia consectetur accusamus fugit nihil, suscipit nobis quae modi, laboriosam facere necessitatibus aspernatur perspiciatis possimus explicabo commodi velit, eligendi praesentium. Sapiente doloremque ex autem odio tempore dolore soluta qui reprehenderit non nemo, accusantium delectus amet, reiciendis aliquam maxime quos unde, voluptates. Ducimus quae, recusandae porro soluta rem odio delectus aperiam minima quisquam fugit accusamus iste consectetur reiciendis voluptatum ullam quibusdam adipisci dolore nesciunt tempore molestias, velit repudiandae!',
				author: 'Author 1',
				date: new Date('2016-02-25')
			},
		];

		this.selected = _.find(this.list, (item) => {
			return item.id == this._$stateParams.id;
		});

	}
}

export default [
		'$stateParams',
    ArticleController
];
